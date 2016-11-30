import React, { Component } from 'react'
import ReactDOM from "react-dom"

class SearchTableItem extends Component {
  render() {
    let tags = this.props.data.tags.map((tag_name, key) => {return (<span key={key} className="label label-info label__with_margin">{tag_name}</span>)})

    return (
      <tr>
        <td><span className="cell_with_phone_prefix">{this.props.data.prefix}</span></td>
        <td>from {this.props.data.min_length} to {this.props.data.max_length}</td>
        <td>{this.props.data.usage}</td>
        <td>{this.props.data.comment}</td>
        <td>{tags}</td>
      </tr>
    )
  }
}

export default class SearchTable extends Component {


  render() {
    let table_body = this.props.data.map((item_data, key) => {return (<SearchTableItem key={key} data={item_data}/>)})

    return (
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Prefix</th>
            <th>Length</th>
            <th>Usage</th>
            <th>Comment</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {table_body}
        </tbody>
      </table>
    )
  }
}
