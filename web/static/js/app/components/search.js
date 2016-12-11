import React from 'react'

import SearchFormContainer from "../containers/search_form.js"
import SearchTableContainer from "../containers/search_table.js"
import SearchPaginationContainer from "../containers/search_pagination.js"
import LoadingContainer from "../containers/loading.js"


const SearchComponent = () => (
  <div>
    <SearchFormContainer />
    <LoadingContainer />
    <SearchTableContainer />
    <SearchPaginationContainer />
  </div>
)

export default SearchComponent