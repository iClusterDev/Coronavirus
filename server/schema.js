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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    country: {
      type: CountryType,
      args: { name: { type: GraphQLString } },
      resolve(parentValue, args) {
        const promises = [
          `https://corona.lmao.ninja/countries/${args.name}`,
          `https://corona.lmao.ninja/yesterday/${args.name}`,
          `https://corona.lmao.ninja/v2/historical/${args.name}?lastdays=all`,
        ].map((url) => axios.get(url, { timeout: 500 }).then((res) => res.data));
        return Promise.all(promises).then(([res1, res2, history]) => {
          return getData(res1, res2, history);
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
