import request from 'superagent'

const phonePrefixesStore = store => next => action => {
  next(action)
  console.log(action)
  switch(action.type) {
    case "GET_PREFIXES_DATA":
      request
      .get("/api/phone_prefixes?query=" + action.query + "&page=" + action.page)
      .end((err, res) => {
        if(err) {
          return next({
            type: 'GET_PREFIXES_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text)
        next({
          type: 'GET_PREFIXES_DATA_RECEIVED',
          data
        })
      })
      break
    
    case "GET_PAGE":
      var current_state = store.getState()
      store.dispatch({
        type: "GET_PREFIXES_DATA",
        query: current_state.query, 
        page: action.page
      })
      break

    case "GET_QUERY":
      store.dispatch({
        type: "GET_PREFIXES_DATA",
        query: action.query, 
        page: 0
      })
      break

    default: 
      break
  }
}

export default phonePrefixesStore
