const phonePrefixesReducer = (state = {}, action) => {
  switch(action.type) {
    case "GET_PREFIXES_DATA_RECEIVED":
      return {phonePrefixes: action.data.data, total_pages: action.data.total_pages, current_page: action.data.current_page, query: state.query}
    default:
      return state
  }
}

export default phonePrefixesReducer