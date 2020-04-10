const moment = require("moment");

const summarize = (sourceObj) => {
  const outputArray = [];
  Object.entries(sourceObj).forEach(([key, value], index, source) => {
    let growth = 0;
    let today = 0;
    if (index > 2) {
      // this is on the total values
      // const present = value;
      // const past = source[index - 1][1];
      // const net = present - past;
      // const rate = past === 0 ? 0 : net / past;
      // growth = rate * 100;
      // today = net;
      // this is on the today's values
      const present = value - source[index - 1][1];
      const past = source[index - 1][1] - source[index - 2][1];
      const net = present - past;
      const rate = past === 0 ? 0 : net / past;
      growth = rate < 1 ? rate * 100 : 100;
      today = present;
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
    return res1_todayCases === res2_todayCases ? { ...res1 } : { ...res2 };
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
