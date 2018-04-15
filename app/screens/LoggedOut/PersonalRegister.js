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
  TextInput
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


export default class PersonalRegister extends Component {
  
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
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={[styles.container, styles.bgPrimary ]}>
        <Card
          wrapperStyle={{ borderWidth: 0, padding:0, margin: 0, paddingBottom:0  }}
          containerStyle={styles.oneCardPage}
        >
          <View style={styles.rowDirection}>
            <View style={{ width:'25%' }}>
              <Icon name="ios-arrow-back" size={normalize(40)} color={colors.primary} onPress={() => goBack()} />              
            </View>
            <View style={{ marginTop:'3%', alignItems:'center' }}>            
              <Text style={styles.blueButtonText}>Sign Up Personal</Text>
              <Text style={styles.normalBlackText}>Daftar Akun Personal</Text>
            </View>
          </View>

          <View style={{ padding:'5%', marginBottom:'15%' }} >
            <Text style={styles.blueTextNormalSize}> Nama</Text>
            <TextInput
              underlineColorAndroid={colors.primary}
              style={styles.registrationTextInput}
              placeholder='Nama'  
            />
            <Text style={styles.blueTextNormalSize}> Email</Text>
            <TextInput
              underlineColorAndroid={colors.primary}
              style={styles.registrationTextInput}
              placeholder='Email'  
            />
            <Text style={styles.blueTextNormalSize}> Password</Text>
            <TextInput
              underlineColorAndroid={colors.primary}
              style={styles.registrationTextInput}
              placeholder='Password'  
            />
            <Text style={styles.blueTextNormalSize}> Password Confirmation</Text>
            <TextInput
              underlineColorAndroid={colors.primary}
              style={styles.registrationTextInput}
              placeholder='Password Confirmation'  
            />
          </View>
          
          <Button style={styles.smallBlueButton} onPress={() => navigate('PersonalDataRegister')} >
            <Text style={styles.whiteNormalText}>Lanjut</Text>
          </Button>
        </Card>
      </View>
    );
  }
}
