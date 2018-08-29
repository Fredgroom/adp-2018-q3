/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, View, FlatList, SectionList, Text, ActivityIndicator, Image } from 'react-native';


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
    if (this.state.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.row}>
              <Image
                style={styles.avatar}
                source={{ uri: item.avatar }}
              />
              <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
            </View>}
          keyExtractor={item => item.id.toString()}
        />
      );
    }
  }
  componentDidMount() {
    let endpoint = 'https://robot-data.firebaseio.com/robots.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if (this.state.data && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }
};

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: height / 11,
    alignItems: 'center',
  },
  name: {
    paddingLeft: 2,
  },
  avatar: {
    width: 30,
    height: 30,
    margin: 10,
  }
});