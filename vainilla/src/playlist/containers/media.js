import React, { Component } from 'react';
import Media from '../components/media.js';
import { connect } from 'react-redux';


class MediaContainer extends Component {
  render(){
    return <Media {...this.props.data}/>
  }
}

const mapStateToProps = (state, props) => {
  console.log(props)
  return {
    data: state.data.entities.media[props.id]
  }
}

export default connect(mapStateToProps)(MediaContainer)