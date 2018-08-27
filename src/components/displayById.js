import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosGetPosts, axiosGetPostsById} from '../actions/getAction';
import { bindActionCreators } from 'redux'

class DisplayById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }


  render() {
      console.log("render by id",this.props.postsById)

      if (this.props.postsById) {
        return (
        
            <div>
                <p>{this.props.postsById.id}</p>
                <p>{this.props.postsById.body}</p>
                <p>{this.props.postsById.title}</p>
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
    postsList : state.posts.list,
    postsById : state.postsById.listById
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({axiosGetPostsById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayById);