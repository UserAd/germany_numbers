import { connect } from 'react-redux'
import PaginationComponent from '../components/pagination.js'
import { getPrefixesPage } from "../actions"

const mapStateToProps = (state) => {
  return {
    total_pages: state.total_pages,
    current_page: state.current_page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (page) => {
      dispatch(getPrefixesPage(page))
    }
  }
}

const SearchPaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent)

export default SearchPaginationContainer