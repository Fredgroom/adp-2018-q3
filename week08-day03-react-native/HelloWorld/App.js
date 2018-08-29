/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, View, FlatList, Text } from 'react-native';

const instructions = Platform.select({
  ios: 'LinkedIn: Freddie-Groom\n' +
    'Instagram: @GreddieFroom',
  android:
    'LinkedIn: Freddie-Groom\n' +
    'Instagram: @GreddieFroom',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = { data: ['Thing 1', 'Thing 2'] };
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <View><Text>{item}</Text></View>}
        keyExtractor={(item, index) => index}
      />
    );
  };
};

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: width / 2,
    height: height / 2,
  },
  box1: {
    backgroundColor: 'powderblue',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'steelblue',
  },
  box4: {
    backgroundColor: 'midnightblue',
  },
});