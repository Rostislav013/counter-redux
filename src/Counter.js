import React from 'react';
import { connect } from 'react-redux'; //To get the count out of Redux
import './Counter.css';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(90deg, rgba(102,62,142,1) 0%, rgba(0,23,36,1) 0%, rgba(0,212,255,1) 100%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 15px',
});


   


class Counter extends React.Component {

    

    increment = () =>{
      this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' })
    }
    restart = () => {
      this.props.dispatch({ type: 'RESTART' })
    }

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <div>
          
          <MyButton onClick={this.decrement}>-</MyButton>
          <span className="num">{this.props.count}</span>
          <MyButton onClick={this.increment}>+</MyButton>
        </div>
        <div className="control">
        <MyButton onClick={this.restart}>Restart</MyButton>
        </div>
        
      </div>
    );
  }
}


//--Connecting Counter component to Redux
function mapStateToProps(state) {
  return {
    count : state.count
  };
}
//--Connect is higher-order component.
//it returns a function when you call it. And then calling that function with a component returns a new (wrapped) component.
export default connect(mapStateToProps)(Counter);
