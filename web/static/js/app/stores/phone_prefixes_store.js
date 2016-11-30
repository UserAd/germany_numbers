import request from 'superagent'

const phonePrefixesStore = store => next => action => {
  next(action)
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
    default: 
      break
  }
}

export default phonePrefixesStore
