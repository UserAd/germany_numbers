import React from 'react'
import { connect } from 'react-redux'
import { searchQuery } from "../actions"


let SearchFormContainer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="form-inline" onSubmit={e => {
        e.preventDefault()
        dispatch(searchQuery(input.value))
      }}>
        <div className="form-group">
          <input ref={node => { input = node }} type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}

SearchFormContainer = connect()(SearchFormContainer)

export default SearchFormContainer