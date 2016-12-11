import React, { PropTypes } from 'react'
import SearchTableItemComponent from "./search_table_item.js"


const SearchTableComponent = ({phonePrefixes}) => (
 <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp search_table__width_100">
    <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric">Prefix</th>
        <th className="mdl-data-table__cell--non-numeric">Length</th>
        <th className="mdl-data-table__cell--non-numeric">Usage</th>
        <th className="mdl-data-table__cell--non-numeric">Comment</th>
        <th className="mdl-data-table__cell--non-numeric">Tags</th>
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

