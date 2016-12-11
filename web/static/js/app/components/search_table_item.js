import React, { PropTypes } from 'react'


const SearchTableItemComponent = ({prefix, min_length, max_length, usage, comment, tags}) => (
  <tr>
    <td className="mdl-data-table__cell--non-numeric"><span className="cell_with_phone_prefix">{prefix}</span></td>
    <td className="mdl-data-table__cell--non-numeric">{min_length} to {max_length}</td>
    <td className="mdl-data-table__cell--non-numeric">{usage}</td>
    <td className="mdl-data-table__cell--non-numeric">{comment}</td>
    <td className="mdl-data-table__cell--non-numeric">{tags.map((tag_name, key) => {return (<span key={key} className="label label-info label__with_margin">{tag_name}</span>)})}</td>
  </tr>
)

SearchTableItemComponent.propTypes = {
  prefix: PropTypes.string.isRequired,
  min_length: PropTypes.string.isRequired,
  max_length: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}

export default SearchTableItemComponent