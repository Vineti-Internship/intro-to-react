import React from 'react';

class User extends React.Component {
  constructor(){
    super();
    console.log('constructor');
    this.state = {
      n: 0,
      a: 1
    };
  }

  static defaultProps = {
    b: 3
  };

  static getDerivedStateFromProps(){
    console.log('get derived state from props.');
    return null;
  }

  shouldComponentUpdate(){
    console.log('should comp update');
    return true;
  }

  componentDidMount(){
    console.log('Component did mount.');
  }

  getSnapshotBeforeUpdate(){
    console.log('get snapshot before update');
  }

  componentDidUpdate(){
    console.log('comp did update');
  }

  clickHandler = () => {
    const {n} = this.state;
    this.setState({n: n+1});
  }

  render(){
    console.log('render');
    return (
      <div>
        <h1>{this.props.fullName}</h1>
        <p>{this.props.age}</p>
        <h2>{this.state.n}</h2>
        <h2>{this.props.b}</h2>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

// class User extends React.PureComponent {

//   state = {
//     n: 0
//   };

//   render(){
//     return (
//       <h1>Hello</h1>
//     );
//   }
// }

// const User = ({fullName, age}) => {
//   return <h1>Hello</h1>;
// }

export default User;