import React, { PropTypes } from 'react'
import SearchTableItemComponent from "./search_table_item.js"

const SearchTableComponent = ({phonePrefixes}) => (
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
      {phonePrefixes.map(item => 
        <SearchTableItemComponent key={item.prefix} {...item} />
      )}
    </tbody>
  </table>  
)

SearchTableComponent.propTypes = {
  phonePrefixes: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    min_length: PropTypes.string.isRequired,
    max_length: PropTypes.string.isRequired,
    usage: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
  }).isRequired).isRequired
}

export default SearchTableComponent

