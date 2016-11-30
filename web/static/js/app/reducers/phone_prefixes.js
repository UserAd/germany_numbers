const phonePrefixes = (state = [], action) => {
  switch(action.type) {
    case "GET_PREFIXES_DATA_RECEIVED":
      return action.data
    default:
      return state
  }  
}

export default phonePrefixes