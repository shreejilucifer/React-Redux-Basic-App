/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export class Spinner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={this.props.size || 'large'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
