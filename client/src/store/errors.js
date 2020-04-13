export default {
  NULL: () => {
    return {
      type: null,
      source: null,
      message: null,
      status: false
    };
  },
  SERVER: (source = "") => {
    return {
      type: 500,
      source: source,
      message: `Ooops! The Server is Unable to Respond right now!`,
      status: true
    };
  },
  NOTFOUND: (source = "", item = "") => {
    return {
      type: 404,
      source: source,
      message: `No Data Available for ${item}!`,
      status: true
    };
  }
};
