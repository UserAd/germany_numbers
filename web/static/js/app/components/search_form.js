import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search_string: ''
    };
  }

  on_submit() {
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.search_string)
    }
  }

  on_change() {
    this.setState({
      search_string: ReactDOM.findDOMNode(this.refs.search_string).value
    })
  }


  render() {

    let submit_handler = event => { this.on_submit(event); event.preventDefault(); }
    let change_handler = event => { return this.on_change(event); }

    return (
      <div>
        <form className="form-inline" onSubmit={submit_handler}>
          <div className="form-group">
            <input onChange={change_handler} type="text" className="form-control" id="exampleInputName2" placeholder="Berlin" value={this.state.search_string} ref="search_string" />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <br />
      </div>
    )
  }
}
