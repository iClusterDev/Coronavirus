const moment = require("moment");

const summarize = (sourceObj) => {
  const outputArray = [];
  Object.entries(sourceObj).forEach(([key, value], index, source) => {
    let growth = 0;
    let today = 0;
    if (index > 0) {
      // this is on the total values

      // pres. |  past  |  net  |   rate  | result
      // ------------------------------------------
      //   100 |   100  |    0  |   0/100 |     0
      //     0 |   100  | -100  |-100/100 |    -1
      //   100 |     0  |  100  | 100/0   |   inf  → must return 1
      //     0 |     0  |    0  |   0/0   |   inf  → must return 0

      let present = value;
      let past = source[index - 1][1];
      let net = present - past;
      let rate = 0;
      // this is to handle the cases when past === 0
      if (past === 0) {
        rate = present > 0 ? 0.01 : 0;
      } else {
        rate = net / past;
      }
      growth = rate * 100;
      today = net;
      // this is on the today's values
      // let present = value - source[index - 1][1];
      // let past = source[index - 1][1] - source[index - 2][1];
      // let net = present - past;
      // let rate = past === 0 ? 0 : net / past;
      // growth = rate < 1 ? rate * 100 : 100;
      // today = present;
      // debug
    }
    outputArray.push({ date: key, total: value, today, growth });
  });
  return outputArray;
};

const getTimeline = (history) => {
  const { timeline: { cases, deaths, recovered } = {} } = history;
  return {
    cases: summarize(cases),
    deaths: summarize(deaths),
    recovered: summarize(recovered),
  };
};

const getLastValidUpdate = (res1, res2) => {
  let { cases: res1_cases, todayCases: res1_todayCases } = res1;
  let { cases: res2_cases, todayCases: res2_todayCases } = res2;
  res1.isNew = true;
  res2.isNew = false;
  if (res1_cases === res2_cases) {
    return res1_todayCases === res2_todayCases ? { ...res2 } : { ...res1 };
  } else {
    return { ...res1 };
  }
};

const getCountryInfo = (lastValidUpdate) => {
  const { lat, long, flag } = lastValidUpdate.countryInfo;
  const { country: name } = lastValidUpdate;
  return {
    name,
    lat,
    long,
    flag,
  };
};

const getUpdatedHistory = (history, lastValidUpdate) => {
  if (lastValidUpdate.isNew) {
    const date = moment(parseInt(lastValidUpdate.updated)).format("M/D/YY");
    const { cases, deaths, recovered } = lastValidUpdate;
    history.timeline.cases[date] = cases;
    history.timeline.deaths[date] = deaths;
    history.timeline.recovered[date] = recovered;
  }
  return { ...history };
};

module.exports = (res1, res2, history) => {
  const lastValidUpdate = getLastValidUpdate(res1, res2);
  const updatedHistory = getUpdatedHistory(history, lastValidUpdate);
  const countryInfo = getCountryInfo(lastValidUpdate);
  const timeline = getTimeline(updatedHistory);
  return { ...countryInfo, timeline };
};
