const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLFloat } = require("graphql");
const axios = require("axios");
const Data = require("./data");

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    country: { type: GraphQLString },
    cases: { type: GraphQLInt },
    deaths: { type: GraphQLInt },
    active: { type: GraphQLInt },
    critical: { type: GraphQLInt },
    recovered: { type: GraphQLInt },
    todayCases: { type: GraphQLInt },
    todayDeaths: { type: GraphQLInt },
    casesPerOneMillion: { type: GraphQLInt }
  })
});

const HistoryType = new GraphQLObjectType({
  name: "History",
  fields: () => ({
    country: { type: GraphQLString },
    timeline: { type: TimelineType }
  })
});

const TimelineType = new GraphQLObjectType({
  name: "Timeline",
  fields: () => ({
    cases: { type: new GraphQLList(DataType) },
    deaths: { type: new GraphQLList(DataType) },
    recovered: { type: new GraphQLList(DataType) }
  })
});

const DataType = new GraphQLObjectType({
  name: "Data",
  fields: () => ({
    date: { type: GraphQLString },
    total: { type: GraphQLInt },
    today: { type: GraphQLInt },
    growth: { type: GraphQLFloat }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    history: {
      type: new GraphQLList(HistoryType),
      args: { countries: { type: new GraphQLList(GraphQLString) } },
      resolve(parentValue, args) {
        return axios.get(`https://corona.lmao.ninja/v2/historical/${args.countries}`).then(res => {
          if (Array.isArray(res.data)) {
            return res.data.map(item => {
              return new Data(item);
            });
          }
          return [new Data(res.data)];
        });
      }
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parentValue, args) {
        return axios.get(`https://corona.lmao.ninja/countries/`).then(res => res.data);
      }
    },
    stats: {
      type: new GraphQLList(CountryType),
      args: { countries: { type: new GraphQLList(GraphQLString) } },
      resolve(parentValue, args) {
        return axios.get(`https://corona.lmao.ninja/countries/`).then(res => {
          return res.data.filter(item => {
            for (const country of args.countries) {
              if (item.country.toLowerCase() === country.toLowerCase()) {
                return item;
              }
            }
          });
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
