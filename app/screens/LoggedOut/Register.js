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
import { Card, normalize } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';


export default class Register extends Component {
  
  static navigationOptions = () => ({
    title: (
    <Image
      source={require('../../assets/images/logo-travilogs-text.png')} />),
    headerStyle: {
      backgroundColor: colors.primary,
      borderWidth:0,
      elevation:0
    },
    headerTitleStyle: {
      flex:1,
      alignItems:'center',
      textAlign:'center'
    },
    headerLeft: <View/>,
    headerRight: <View />
  })

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, styles.bgPrimary ]}>
        <Card
          wrapperStyle={{ borderWidth: 0, padding:0, margin: 0, paddingBottom:0  }}
          containerStyle={styles.oneCardPage}
        >
          <View style={styles.rowDirection}>
            <View style={{ width:'37.5%' }}>
              <Icon name="ios-arrow-back" size={normalize(40)} color={colors.primary} />              
            </View>
            <Text style={styles.blueButtonText}>Sign Up</Text>
          </View>
          <View style={styles.registerContainer1}>
            <View style={styles.registerLogoContainer}>
              <Button
                onPress={() => navigate('PersonalRegister')}
                style={styles.registerInsideLogoContainer}>
                <Image
                  source={require('../../assets/images/personal-logo.png')}
                  style={{ width:'100%',height:'100%' }}
                  resizeMethod='resize'
                  resizeMode='contain' />
              </Button>
              <Text style={styles.blueTextNormalSize}>Daftar Sebagai</Text>
              <Text style={styles.blueTextSuperBigSize}>Personal</Text>
            </View>
            <View style={styles.registerLogoContainer2}>
              <Image
                source={require('../../assets/images/background-register.png')}
                style={{ width:'100%', height:'100%' }}
                resizeMethod='resize'
                resizeMode='contain' />
            </View>
            <View style={styles.registerLogoContainer}>
              <Button
                onPress={() => navigate('CorporateRegister')}
                style={styles.registerInsideLogoContainer}>
                <Image
                  source={require('../../assets/images/corporate-logo.png')}
                  style={{ width:'100%',height:'100%' }}
                  resizeMethod='resize'
                  resizeMode='contain' />
              </Button>
              <Text style={styles.blueTextNormalSize}>Daftar Sebagai</Text>
              <Text style={styles.blueTextSuperBigSize}>Corporate</Text>
            </View>
          </View>
          <View style={{ height:'15%', justifyContent:'flex-end' }}>
          <Button style={styles.smallBlueButton} onPress={() => alert('Function Here')} >
            <Text style={styles.whiteNormalText}>Lanjut</Text>
          </Button>
          </View>
        </Card>
      </View>
    );
  }
}
