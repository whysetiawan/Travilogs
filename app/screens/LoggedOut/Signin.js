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
  TouchableNativeFeedback,
  TextInput,
  Picker
} from 'react-native';
import { 
  deviceWidth,
  deviceHeight,
  colors
} from '../../helpers/constants';
import styles from '../../assets/styles';
import Button from '../../components/Button';
import { Card, normalize, CheckBox } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';


export default class Signin extends Component {
  
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

  constructor(props){
    super(props);
    this.state = {
      gender: 'java',
      agreement1: false,
      agreement2: false
    }
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={[styles.container, styles.bgPrimary ]}>
        <Card
          wrapperStyle={{ borderWidth: 0, padding:0, margin: 0, paddingBottom:0  }}
          containerStyle={styles.oneCardPage}
        >
          <Icon name="ios-arrow-back" size={normalize(40)} color={colors.primary} onPress={() => goBack()} />              
          <Text style={[styles.blueButtonText, { textAlign:'center' }]}>Sign In</Text>
          <View style={{ marginTop:'3%' }}>
            <Text style={styles.blueTextNormalSize}> Email</Text>
            <View style={{ height: deviceHeight * 0.058 }} >
              <TextInput
                underlineColorAndroid={colors.primary}
                placeholder='example@domain.com'  
              />
            </View>
            <Text style={styles.blueTextNormalSize}> Password</Text>
            <TextInput
              underlineColorAndroid={colors.primary}
              style={styles.registrationTextInput}
              placeholder='Password'
              secureTextEntry  
            />
            <Text style={[styles.smallItalicText, { textAlign:'center', marginVertical:'3%' }]}>Lupa Password? Reset disini</Text>
          </View>
          
          <Button style={styles.signinYellowButton} onPress={() => alert('Function Here')} >
            <Text style={styles.blueTextNormalSize}>Masuk</Text>
          </Button>
            <Text style={[styles.smallItalicText, { textAlign:'center', marginVertical:'3%' }]}>Belum punya akun?</Text>
          <Button style={styles.signinBlueButton} onPress={() => alert('Function Here')} >
            <Text style={styles.whiteNormalText}>Daftar</Text>
          </Button>
          <Button style={styles.signinBlueButton} onPress={() => alert('Function Here')} >
            <Text style={styles.whiteNormalText}>Sign In Via Facebook</Text>
          </Button>
          <Button style={styles.signinRedButton} onPress={() => alert('Function Here')} >
            <Text style={styles.whiteNormalText}>Sign In Via Google</Text>
          </Button>
        </Card>
      </View>
    );
  }
}
