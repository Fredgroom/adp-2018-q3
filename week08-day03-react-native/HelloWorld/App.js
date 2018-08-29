/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'LinkedIn: Freddie-Groom\n' +
    'Instagram: @GreddieFroom',
  android:
    'LinkedIn: Freddie-Groom\n' +
    'Instagram: @GreddieFroom',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Text style={styles.instructions}>@GreddieFroom</Text>
        <Text style={styles.instructions}></Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={{backgroundColor: "#53290B"}}>
        <Button
          title="Learn More"
          color="white"
          accessibilityLabel="Learn more about this disgustingly coloured button"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 25,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
