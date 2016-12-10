import React, { PropTypes } from 'react'

const SearchFormComponent = ({query, onSubmit}) => (
  <div>
    <form className="form-inline" onSubmit={e => {e.preventDefault(); onSubmit()}}>
      <div className="form-group">
        <input type="text" className="form-control" id="qiery_string" placeholder="Berlin" value={query} />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
    <br />
  </div>
)

SearchFormComponent.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default SearchFormComponent