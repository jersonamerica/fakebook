const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH":
      return posts;
    default:
      return posts;
  }
};

export default reducer;
