// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosGetPosts, axiosGetPostsById} from '../actions/getAction';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

type Props = {
  postsList : Array<Object>,
  axiosGetPosts : Function,
  axiosGetPostsById : Function,
  classes : Object,
};

class Display extends Component<Props> {
  props : Props;
  constructor() {
    super();
    this.state = {
      posts: [],
      currentPage: 2,
      postsPerPage: 10
    };
    this.handle = this.handle.bind(this);
  }
  componentDidMount() {    
    this.props.axiosGetPosts()
  }

  handleClick(id) {
    this.props.axiosGetPostsById(id)
  }

  handle(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { currentPage, postsPerPage } = this.state;
    const { classes } = this.props;

    // DISPLAY CURRENT
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentposts = this.props.postsList.slice(indexOfFirstPost, indexOfLastPost);
    
    const renderposts = currentposts.map((post, index) => {
      return <div key={index} style={{display : "flex"}}>
                  <Button onClick={() => this.handleClick(post.id)} component={Link} to={'/byid/' + post.id} variant="contained" color="primary" className={classes.button}>
                      Go to post {post.id}
                  </Button>
                  <p> NAME : {post.name}</p>
                  <p> EMAIL : {post.email}</p>
              </div>;
    });
   
    // PAGE DISPLAY
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.postsList.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <p key={number} id={number} onClick={this.handle} style={{border: "1px solid black", padding: "3px"}} >
        {number}
        </p>
      );
    });

      return (
        <div>
          <div>
            {renderposts}
          </div>
          <div id="page-numbers" style={{display : "flex"}} >
            {renderPageNumbers}
          </div>
        </div>
      )
}}

const mapStateToProps = state => ({
    postsList : state.posts.list,
    postsById : state.postsById.listById
})

function mapDispatchToProps(dispatch) {
    return {
      axiosGetPosts: bindActionCreators(axiosGetPosts, dispatch), 
      axiosGetPostsById: bindActionCreators(axiosGetPostsById, dispatch), 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Display));
