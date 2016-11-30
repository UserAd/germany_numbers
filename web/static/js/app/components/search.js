import React, { Component } from 'react'
import ReactDOM from "react-dom"

import SearchForm from "./search_form.js"
import SearchTable from "./search_table.js"
import SearchPagination from "./search_pagination.js"
import { connect } from 'react-redux'


export default class Search extends Component {
  
  onChangePage(page) {
  	console.log(page)
  }

  render() {
    console.log(this)
    let change_page = page => { return this.onChangePage(page); }
    let submit_search = query => { return this.onChangePage(query); }
    
    let data = [
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']},
      {'prefix': 1234567, 'min_length': 3, 'max_length': 10, usage: 'Mobile services', 'comment': 'E-Plus Mobilfunk GmbH', 'tags': ['mobile', 'gov']}
    ]

    let current_page = 0

    return (
      <div>
        <SearchForm onSubmit={submit_search}/>
        <SearchTable data={data} />
        <SearchPagination total_items={data.length} current_page={current_page} onChange={change_page}/>
      </div>
    )
  }
}
