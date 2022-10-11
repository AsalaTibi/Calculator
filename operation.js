import React from 'react';
import App from './App';
export class operation extends React.Component {
  state = {
    firstNum: 0,
    secondNum: 0,
  };
  add = () => {
    var N1 = this.state.firstNum;
    var N2 = this.state.secondNum;
    var R = N1 + N2;
  };
  sub = () => {
    var N1 = this.state.firstNum;
    var N2 = this.state.secondNum;
    var R = N1 - N2;
  };
  mult = () =>{
    var N1 = this.state.firstNum;
    var N2 = this.state.secondNum;
    var R = N1 * N2;
  };
  div = () =>{
    var N1 = this.state.firstNum;
    var N2 = this.state.secondNum;
    var R = N1 / N2;
  };
}
