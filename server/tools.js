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
    }
    outputArray.push({ date: key, total: value, today, growth });
  });
  return outputArray;
};

const getTimeline = (history) => {
  const { timeline: { cases, deaths } = {} } = history;
  return {
    cases: summarize(cases),
    deaths: summarize(deaths),
  };
};

const addDate = (resData) => {
  const { updated } = resData;
  if (resData.isNew) {
    return moment(parseInt(updated)).format("M/D/YY");
  } else {
    return moment(parseInt(updated)).subtract(1, "day").format("M/D/YY");
  }
};

const isLastValid = (res1, res2) => {
  let { cases: res1_cases, todayCases: res1_todayCases } = res1;
  let { cases: res2_cases, todayCases: res2_todayCases } = res2;
  let { deaths: res1_deaths, todayDeaths: res1_todayDeaths } = res1;
  let { deaths: res2_deaths, todayDeaths: res2_todayDeaths } = res2;
  return res1_cases === res2_cases && res1_deaths === res2_deaths && res1_todayCases === res2_todayCases && res1_todayDeaths === res2_todayDeaths
    ? false
    : true;
};

const getCountryInfo = (res1, res2, history) => {
  const timeline = getTimeline(history);
  const resData = isLastValid(res1, res2) ? { ...res1 } : { ...res2 };
  const { flag } = resData.countryInfo;
  const { country: name, cases, deaths, todayCases, todayDeaths } = resData;
  const date = addDate(resData);
  return {
    date,
    name,
    flag,
    cases,
    deaths,
    todayCases,
    todayDeaths,
    timeline,
  };
};

module.exports = (res1, res2, history) => {
  const countryInfo = getCountryInfo(res1, res2, history);
  return { ...countryInfo };
};
