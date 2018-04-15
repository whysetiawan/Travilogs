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
import { Card, normalize } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';


export default class PersonalDataRegister extends Component {
  
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
              <Text style={styles.blueButtonText}>Isi Data Dirimu</Text>
          </View>

          <View style={{ padding:'5%', marginBottom:'15%', marginTop:'5%' }} >
            <View style={styles.rowDirection}>
              <Button style={{ width:'30%', height: deviceHeight * 0.15, backgroundColor: '#CCCCCC' }}/>
            <View style={{ width:'70%', paddingLeft:'2%' }} >              
              <Text style={styles.blueTextNormalSize}> Nama</Text>
              <TextInput
                underlineColorAndroid={colors.primary}
                style={styles.registrationTextInput}
                placeholder='Nama'  
              />
              <Picker
                style={{ width: '100%', borderWidth:3 }}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            </View>
          </View>
          
          <Button style={styles.smallBlueButton} onPress={() => alert('Function Here')} >
            <Text style={styles.whiteNormalText}>Lanjut</Text>
          </Button>
        </Card>
      </View>
    );
  }
}
