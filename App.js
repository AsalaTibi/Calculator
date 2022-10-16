/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import Calculator from './operation';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Calculator />;
  }
}
export default App;
