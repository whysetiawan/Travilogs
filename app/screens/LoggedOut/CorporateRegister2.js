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
  Picker,
  ScrollView
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


export default class CorporateRegister2 extends Component {
  
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
      agreement1: false,
      agreement2: false
    }
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={[styles.container, styles.bgPrimary ]}>
        <ScrollView>
          <Card
            wrapperStyle={{ borderWidth: 0, padding:0, margin: 0, paddingBottom:0  }}
            containerStyle={styles.scrollingCardPage}
          >
            <View style={styles.rowSpaceBetweenDirection}>
              <Icon name="ios-arrow-back" size={normalize(40)} color={colors.primary} onPress={() => goBack()} />              
              <Text style={styles.blueButtonText}>Lengkapi Data Usaha</Text>
              <View/>
            </View>

            <Text style={[styles.blueButtonText, { fontWeight:'bold', textAlign:'center' }]}>PT. Ernakan Iwan</Text>

            <View style={{ padding:'5%', marginBottom:'15%', marginTop:'5%' }} >
              <View style={{ width:'70%' }} >
                <Text style={styles.blueTextNormalSize}> Nama PIC</Text>
                <TextInput
                  underlineColorAndroid={colors.primary}
                  style={styles.registrationTextInput}
                  placeholder='Nama'  
                />
              </View>

              <View style={{ paddingLeft:'2%', width:'50%',  paddingRight:'2%' }} >
                <Text style={styles.blueTextNormalSize}>Jenis Kelamin</Text>
              <View style={styles.rowDirection}>
                <View style={styles.corporatePickerContainer2}>
                  <Picker
                    style={styles.corporatePickerStyle}
                    mode='dropdown'>
                    <Picker.Item label="Laki-Laki" value="java" color={colors.primary} />
                    <Picker.Item label="Perempuan" value="js" color={colors.primary} />
                  </Picker>
                </View>
                  <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
                </View>
              </View>
              
              <View style={{ width:'50%' }} >
                <Text style={styles.blueTextNormalSize}> Jabatan PIC</Text>
                <TextInput
                  underlineColorAndroid={colors.primary}
                  style={styles.registrationTextInput}
                  placeholder='Jabatan'  
                />
              </View>

                <Text style={styles.blueTextNormalSize}> No Hanphone PIC</Text>
                  <TextInput
                    underlineColorAndroid={colors.primary}
                    style={styles.registrationTextInput}
                    placeholder='ex: 08xxxxxxxx'  
                  />

                <Text style={styles.blueTextNormalSize}> No Telepon Kantor</Text>
                  <TextInput
                    underlineColorAndroid={colors.primary}
                    style={styles.registrationTextInput}
                    placeholder='ex: 02xxxxxxxx'  
                  />

                <Text style={styles.blueTextNormalSize}> NPWP Perusahaan</Text>
                  <TextInput
                    underlineColorAndroid={colors.primary}
                    style={styles.registrationTextInput}
                    placeholder='NPWP Perusahaan'  
                  /> 

                <View style={{ paddingLeft:'2%', width:'50%',  paddingRight:'2%' }} >
                  <Text style={styles.blueTextNormalSize}>Jeni Usaha</Text>
                <View style={styles.rowDirection}>
                  <View style={styles.corporatePickerContainer2}>
                    <Picker
                      style={styles.corporatePickerStyle}
                      mode='dropdown'>
                      <Picker.Item label="Trading" value="java" color={colors.primary} />
                      <Picker.Item label="Trading" value="js" color={colors.primary} />
                    </Picker>
                  </View>
                    <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
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

            <Button style={styles.smallBlueButton} onPress={() => navigate('PersonalDataRegister')} >
              <Text style={styles.whiteNormalText}>Daftar Akun</Text>
            </Button>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
