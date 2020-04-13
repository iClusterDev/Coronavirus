import axios from "axios";
// import { response } from "express";

const QUERIES = {
  options: () => {
    return `
    query optionsQuery {
      options {
        country
        flag
      }
    }`;
  },
  countries: (names = []) => {
    return `
    query countriesQuery {
      countries(names: ${JSON.stringify(names)}) {
        name
        lat
        long
        flag
        timeline {
          cases {
            date
            total
            today
            growth
          }
          deaths {
            date
            total
            today
            growth
          }
        }
      }
    }`;
  },
  country: (name = "") => {
    return `
    query countryQuery {
      country(name: "${name}") {
        name
        lat
        long
        flag
        timeline {
          cases {
            date
            total
            today
            growth
          }
          deaths {
            date
            total
            today
            growth
          }
        }
      }
    }
    `;
  }
};

const request = query => {
  return axios.post("/graphql", { query }).then(response => response.data);
};

class Service {
  static getOptions() {
    return request(QUERIES.options());
  }

  static getCountries(names = []) {
    return request(QUERIES.countries(names));
  }

  static getCountry(name = "") {
    return request(QUERIES.country(name));
  }
}

export default Service;
