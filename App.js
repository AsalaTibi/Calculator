/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View style={styles.intro}>
          <View style={styles.input}>
            <TextInput placeholder={'Enter first Number'} />
            <TextInput placeholder={'Enter second Number'} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn_style}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_style}>
              <Text>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_style}>
              <Text>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_style}>
              <Text>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn_style}>
              <Text>=</Text>
            </TouchableOpacity>
            <TextInput style={styles.result}></TextInput>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  result: {
    height: 40,
    width: 180,
    margin: 12,
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
    alignContent: 'center',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
  },
});

export default App;
