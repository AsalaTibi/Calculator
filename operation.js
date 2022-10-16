import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {firstNum: 0, secondNum: 0, R: 0};
  }
  add = () => {
    var N1 = parseInt(this.state.firstNum);
    var N2 = parseInt(this.state.secondNum);
    this.setState({R: N1 + N2});
  };
  sub = () => {
    var N1 = parseInt(this.state.firstNum);
    var N2 = parseInt(this.state.secondNum);
    this.setState({R: N1 - N2});
  };
  mult = () => {
    var N1 = parseInt(this.state.firstNum);
    var N2 = parseInt(this.state.secondNum);
    this.setState({R: N1 * N2});
  };
  div = () => {
    var N1 = parseInt(this.state.firstNum);
    var N2 = parseInt(this.state.secondNum);
    this.setState({R: N1 / N2});
  };
  render() {
    return (
      <View style={styles.intro}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Simple Calculator</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputTxt}
            placeholder={'Enter first Number'}
            onChangeText={firstNum => this.setState({firstNum})}
          />
          <TextInput
            style={styles.inputTxt}
            placeholder={'Enter second Number'}
            onChangeText={secondNum => this.setState({secondNum})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn_style} onPress={this.add}>
            <Text style={styles.text_btn}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_style} onPress={this.sub}>
            <Text style={styles.text_btn}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_style} onPress={this.mult}>
            <Text style={styles.text_btn}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_style} onPress={this.div}>
            <Text style={styles.text_btn}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.result}>{this.state.R}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    height: 40,
    width: 150,
   // marginTop: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  btn_style: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    height: 50,
    width: 50,
  },
  intro: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
  },
  inputTxt: {
    backgroundColor: 'white',
    margin: 10,
    height: 50,
    width: 150,
  },
  text_btn: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
