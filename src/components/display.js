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

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }
  

  componentWillMount() {    
    this.props.axiosGetPosts()
  }

  handleClick(id) {
    this.props.axiosGetPostsById(id)
  }

  render() {
    const { classes } = this.props;

    if (this.props.postsList.length !==0) {
      return (
        <div>
            {
                this.props.postsList.map(x => {
                    return(
                        <div >
                            <p>{x.name}</p>
                            <p>{x.email}</p>
                            <Button onClick={() => this.handleClick(x.id)} component={Link} to={'/byid/' + x.id} variant="contained" color="primary" className={classes.button}>
                              Go to {x.id}
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
    }

    else {
      return (
        <div><p>NO DATA</p></div>  
  )
}
     
  }
}

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
