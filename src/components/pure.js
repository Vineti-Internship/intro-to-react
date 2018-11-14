import React from 'react';

export default
class Pure extends React.PureComponent {
  render(){
    console.log('PURE');
    return(
      <p>{this.props.n}</p>
    );
  }
};