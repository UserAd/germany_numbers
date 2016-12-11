import { connect } from 'react-redux'
import LoadingComponent from '../components/loading.js'

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const LoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingComponent)

export default LoadingContainer