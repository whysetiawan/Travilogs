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
          <View style={[styles.rowDirection, { alignItems:'center' }]}>
            <View style={{ width:'25%' }}>
              <Icon name="ios-arrow-back" size={normalize(40)} color={colors.primary} onPress={() => goBack()} />              
            </View>
              <Text style={styles.blueButtonText}>Isi Data Dirimu</Text>
          </View>

          <View style={styles.personalDataRegisterContainer1} >
            <View style={styles.rowDirection}>
              <Button style={styles.squareImagePicker}/>
              <View style={styles.personalDataRegisterForm} >              
                <Text style={styles.blueTextNormalSize}> Nama</Text>
                <TextInput
                  underlineColorAndroid={colors.primary}
                  style={styles.registrationTextInput}
                  placeholder='Nama'  
                />
                <View style={{ paddingLeft:'2%' }} >
                  <Text style={styles.blueTextNormalSize}>Jenis Kelamin</Text>
                  <View style={styles.rowDirection}>
                    <View style={styles.personalPickerContainer}>
                      <Picker
                        style={styles.personalPickerStyle}
                        onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        selectedValue={this.state.gender}
                        mode='dropdown'>
                        <Picker.Item label="Laki-Laki" value="java" color={colors.primary} />
                        <Picker.Item label="Perempuan" value="js" color={colors.primary} />
                      </Picker>
                    </View>
                    <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop:'5%'}}>
              <Text style={styles.blueTextNormalSize}> No Handphone</Text>
              <TextInput
                underlineColorAndroid={colors.primary}
                style={styles.registrationTextInput}
                placeholder='08xxxx'  
              />
              <Text style={styles.blueTextNormalSize}> Tanggal Lahir</Text>
              <View style={styles.rowDirection}>
                <TextInput
                  underlineColorAndroid={colors.primary}
                  style={styles.dateRegistrationTextInput}
                  placeholder='DD'  
                />
                <Text style={styles.blueButtonText}> / </Text>
                <TextInput
                  underlineColorAndroid={colors.primary}
                  style={styles.dateRegistrationTextInput}
                  placeholder='MM'  
                />
                <Text style={styles.blueButtonText}> / </Text>
                <TextInput
                  underlineColorAndroid={colors.primary}
                  style={styles.dateRegistrationTextInput}
                  placeholder='YYYY'  
                />
              </View>
            </View>
            <View style={{ marginTop:'5%' }}>
              <CheckBox
                checked={this.state.agreement1}
                title="Saya Setuju dengan Syarat dan Ketentuan"
                onPress={() => this.setState({ agreement1 : !this.state.agreement1 })}
                textStyle={[styles.normalItalicText, { color: '#222', fontWeight: '100', fontSize: normalize(12) }]}
                containerStyle={{ backgroundColor: 'transparent', borderWidth:0, padding:0, margin:0  }}
              />
              <CheckBox
                onPress={() => this.setState({ agreement2 : !this.state.agreement2 })}
                checked={this.state.agreement2}
                title="Saya Setuju dengan Kebijakan dan Privasi Aplikasi Toll Laut"
                textStyle={[styles.normalItalicText, { color: '#222', fontWeight: '100', fontSize: normalize(12) }]}
                containerStyle={{ backgroundColor: 'transparent', borderWidth:0, padding:0, margin:0  }}
              />
            </View>
          </View>
          
          <Button style={styles.smallBlueButton} onPress={() => alert('Function Here')} >
            <Text style={styles.whiteNormalText}>Daftar Akun</Text>
          </Button>
        </Card>
      </View>
    );
  }
}
