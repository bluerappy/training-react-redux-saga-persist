// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';

type Props = {
    storedData : Array<Object>
}

class DisplayByClick extends Component<Props> {
  props: Props;
  render(){

    if (this.props.storedData.length !==0) {
      return (
        <div>
            {
                this.props.storedData.map(x => {
                    return(
                        <div >
                            <p> ID : {x.id}</p>
                            <p> Title : {x.title}</p>
                            <p> Body : {x.body}</p>
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
    storedData : state.persistReducer
})

export default connect(mapStateToProps)(DisplayByClick);