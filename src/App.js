import React from 'react';
import { connect } from 'react-redux'; //To get the count out of Redux
import './App.css';

class App extends React.Component {

    

    increment = () =>{
    /*  this.setState({
        count: this.state.count + 1
      });*/
    }

    decrement = () => {
      /*this.setState({
        count: this.state.count - 1
      });*/
    }

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}


//--Connecting App component to Redux
function mapStateToProps(state) {
  return {
    count : state.count
  };
}
//--Connect is higher-order component.
//it returns a function when you call it. And then calling that function with a component returns a new (wrapped) component.
export default connect(mapStateToProps)(App);
