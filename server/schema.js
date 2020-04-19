const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLFloat } = require("graphql");
const axios = require("axios");
const getData = require("./tools");

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    name: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    long: { type: GraphQLFloat },
    flag: { type: GraphQLString },
    timeline: { type: TimelineType },
  }),
});

const TimelineType = new GraphQLObjectType({
  name: "Timeline",
  fields: () => ({
    cases: { type: new GraphQLList(TimelineItemType) },
    deaths: { type: new GraphQLList(TimelineItemType) },
    recovered: { type: new GraphQLList(TimelineItemType) },
  }),
});

const TimelineItemType = new GraphQLObjectType({
  name: "Data",
  fields: () => ({
    date: { type: GraphQLString },
    total: { type: GraphQLInt },
    today: { type: GraphQLInt },
    growth: { type: GraphQLFloat },
  }),
});

const OptionTipe = new GraphQLObjectType({
  name: "Option",
  fields: () => ({
    country: { type: GraphQLString },
    flag: { type: GraphQLString },
  }),
});

const requestData = (country) => {
  const promises = [
    `https://corona.lmao.ninja/v2/countries/${country}?yesterday=false`,
    `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true`,
    `https://corona.lmao.ninja/v2/historical/${country}?lastdays=all`,
  ].map((url) => axios.get(url, { timeout: 500 }).then((res) => res.data));
  return Promise.all(promises).then(([res1, res2, history]) => {
    return getData(res1, res2, history);
  });
};

const requestoptions = () => {
  const URL = `https://corona.lmao.ninja/v2/countries?yesterday=false`;
  return axios.get(URL, { timeout: 500 }).then((res) => {
    return res.data.map((item) => {
      const {
        country,
        countryInfo: { flag },
      } = item;
      return {
        country,
        flag,
      };
    });
  });
};

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    options: {
      type: new GraphQLList(OptionTipe),
      resolve() {
        return requestoptions();
      },
    },
    countries: {
      type: new GraphQLList(CountryType),
      args: { names: { type: new GraphQLList(GraphQLString) } },
      resolve(parentValue, args) {
        return args.names.map((name) => requestData(name));
      },
    },
    country: {
      type: CountryType,
      args: { name: { type: GraphQLString } },
      resolve(parentValue, args) {
        return requestData(args.name);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
