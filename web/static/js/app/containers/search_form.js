import React from 'react'
import { connect } from 'react-redux'
import { searchQuery } from "../actions"
import TextField from 'material-ui/TextField';


let SearchFormContainer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(searchQuery(input.value))
      }}>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="sample1" ref={node => { input = node }} />
          <label className="mdl-textfield__label" htmlFor="sample1">Phone or city...</label>
        </div>
      </form>
    </div>
  )
}

SearchFormContainer = connect()(SearchFormContainer)

export default SearchFormContainer