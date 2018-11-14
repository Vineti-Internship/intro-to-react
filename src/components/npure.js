import React from 'react';

export default
class NPure extends React.Component {
  render(){
    console.log('NOT PURE');
    return(
      <p>{this.props.n}</p>
    );
  }
};