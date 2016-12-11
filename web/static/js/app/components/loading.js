import React, { PropTypes } from 'react'
import LinearProgress from 'material-ui/LinearProgress';


const LoadingComponent = ({loading}) => {
  if (loading) {
    return (<LinearProgress mode="indeterminate" />)
  } 
  return (<div className="progress__invisible"></div>)
}


LoadingComponent.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default LoadingComponent