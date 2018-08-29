/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, View, FlatList, Text, ActivityIndicator } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = { 
      data: ['Thing 1', 'Thing 2'],
      isLoading: true, 
    };
  }
  render() {
    if (true) {
     return (
      <ActivityIndicator animating={true} size="small" color="black" />
     );
    } else {
     return (
      <FlatList
       data={this.state.data}
       renderItem={({ item }) => <View><Text>{item.name}</Text></View>}
       keyExtractor={item => item.id.toString()}
      />
     );
    }
   }
  componentDidMount() {
    let endpoint = 'https://api.github.com/users/octocat/repos';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if ( this.state.data && this.state.isLoading ) {
      this.setState({ isLoading: false });
    }
  }
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