const expand = sourceObj => {
  const outputArray = [];
  Object.entries(sourceObj).forEach(([key, value], index, source) => {
    let growth = 0;
    let today = 0;
    if (index > 2) {
      // this is on the today's values
      const present = value - source[index - 1][1];
      const past = source[index - 1][1] - source[index - 2][1];
      const net = present - past;
      const rate = past === 0 ? 0 : net / past;
      growth = rate * 100;
      today = present;

      // this is on the total values
      // const present = value;
      // const past = source[index - 1][1];
      // const net = present - past;
      // const rate = past === 0 ? 0 : net / past;
      // growth = rate * 100;
      // today = net;
    }
    outputArray.push({ date: key, total: value, today, growth });
  });
  return outputArray;
};

module.exports = class Data {
  constructor(responseData) {
    const { country, timeline: { cases, deaths, recovered } = {} } = responseData;
    this.country = country;
    this.timeline = {
      cases: expand(cases),
      deaths: expand(deaths),
      recovered: expand(recovered)
    };
  }
};
