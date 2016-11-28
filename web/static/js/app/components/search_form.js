import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputName2" placeholder="Berlin" />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <br />
      </div>
    )
  }
}
