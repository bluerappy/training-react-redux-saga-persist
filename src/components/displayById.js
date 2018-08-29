// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosGetPostsById} from '../actions/getAction';
import { bindActionCreators } from 'redux'

type Props = {
    postsById : Object
}

class DisplayById extends Component<Props> {
props: Props;
  render() {
      if (this.props.postsById) {
        return (
            <div>
                <p>ID : {this.props.postsById.id}</p>
                <p>TITLE : {this.props.postsById.title}</p>
                <p>BODY : {this.props.postsById.body}</p>
            </div>
        )
      } 
      else return (
          <div>
              <p>NO DATA</p>
          </div>
      )   
  }
}

const mapStateToProps = state => ({
    postsById : state.postsById.listById
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({axiosGetPostsById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayById);