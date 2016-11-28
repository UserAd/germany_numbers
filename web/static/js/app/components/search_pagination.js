import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class SearchPagination extends Component {
  render() {
    return (
      <ul className="pagination pagination-sm">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
      </ul>
    )
  }
}
