export const getPrefixesPage = (page) => {
  return {
    type: 'GET_PAGE', 
    page: page
  }
}

export const searchQuery = (query) => {
  return {
    type: 'GET_QUERY', 
    query: query
  }  
}