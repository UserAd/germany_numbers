import { connect } from 'react-redux'
import SearchTableComponent from '../components/search_table.js'

const mapStateToProps = (state) => {
  return {
    phonePrefixes: state.phonePrefixes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SearchTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTableComponent)

export default SearchTableContainer