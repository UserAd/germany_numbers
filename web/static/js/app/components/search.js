import React from 'react'

import SearchFormContainer from "../containers/search_form.js"
import SearchTableContainer from "../containers/search_table.js"
import SearchPaginationContainer from "../containers/search_pagination.js"

const SearchComponent = () => (
  <div>
    <SearchFormContainer />
    <SearchTableContainer />
    <SearchPaginationContainer />
  </div>
)

export default SearchComponent