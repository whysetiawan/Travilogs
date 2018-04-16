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
  TouchableNativeFeedback
} from 'react-native';
import { 
  deviceWidth,
  deviceHeight,
  colors
} from '../../helpers/constants';
import styles from '../../assets/styles';
import Button from '../../components/Button';



export default class Menu extends Component {

  static navigationOptions = () => ({
    header: null
  })

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={[styles.centerContainer, styles.bgPrimary ]}>
        <Image
          source={require('../../assets/images/logo-dark.png')}
          style={{ width:'100%', height: deviceHeight*  0.4 }}
          resizeMethod='resize'
          resizeMode='contain'
          />
        <Button
          onPress={() => navigate('Signin')}
          style={styles.whiteRoundButton}
        >
          <Text style={styles.blueButtonText} >Sign In</Text>
        </Button>

        <Text style={[styles.normalItalicText, { marginTop:'7%', marginBottom:'3%', }]}>Belum punya akun?</Text>
        <Button
          onPress={() => navigate('Register')}
          style={styles.roundButton}
        >
          <Text style={styles.whiteButtonText} >Sign Up</Text>
        </Button>
      </View>
    );
  }
}
