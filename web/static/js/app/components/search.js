import React, { Component } from 'react'
import ReactDOM from "react-dom"

import SearchForm from "./search_form.js"
import SearchTable from "./search_table.js"
import SearchPagination from "./search_pagination.js"

export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <SearchTable />
        <SearchPagination />
      </div>
    )
  }
}
