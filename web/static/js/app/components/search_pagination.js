import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class SearchPagination extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      current_page: props.current_page
    };
  }

  click(event) {
    event.preventDefault()
    this.setState({
      current_page: event.currentTarget.dataset.id
    })

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.state.current_page)
    }
  }

  render() {

    let pages = Math.ceil(this.props.total_items / 20)
    let pages_links = []

    let change_handler = event => { return this.click(event); }

    if(pages > 1) {
      for (let i=0; i < pages; i++) {
        if (i == this.state.current_page) {
          pages_links.push(<li className="active" key={i}><span>{i + 1}</span></li>)
        } else {
          pages_links.push(<li onClick={change_handler} data-id={i} key={i}><a href="#">{i + 1}</a></li>)
        }
      }
    }

    return (
      <ul className="pagination pagination-sm">
        {pages_links}        
      </ul>
    )
  }
}
