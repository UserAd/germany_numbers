import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class SearchTable extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Prefix</th>
            <th>Kind</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>123</td>
            <td>Geo</td>
            <td>Koeln</td>
          </tr>

          <tr>
            <td>123</td>
            <td>Geo</td>
            <td>Koeln</td>
          </tr>

          <tr>
            <td>123</td>
            <td>Geo</td>
            <td>Koeln</td>
          </tr>

          <tr>
            <td>123</td>
            <td>Geo</td>
            <td>Koeln</td>
          </tr>

          <tr>
            <td>123</td>
            <td>Geo</td>
            <td>Koeln</td>
          </tr>

        </tbody>

      </table>
    )
  }
}
