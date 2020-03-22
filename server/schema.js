const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require("graphql");
const axios = require("axios");

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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
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
