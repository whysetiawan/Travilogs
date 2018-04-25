/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {
  deviceWidth,
  deviceHeight,
  colors,
} from '../../helpers/constants';

export default class SplashScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  })

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Menu'), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/splashscreen.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMethod="resize"
          resizeMode="cover"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
