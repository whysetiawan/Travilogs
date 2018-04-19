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
import { Card, normalize } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';


export default class CorporateRegister extends Component {
  
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
        <ScrollView>
          <Card
            wrapperStyle={{ borderWidth: 0, padding:0, margin: 0, paddingBottom:0  }}
            containerStyle={styles.scrollingCardPage}
          >
            <View style={styles.rowDirection}>
              <View style={{ width:'10%' }}>
                <Icon name="ios-arrow-back" size={normalize(40)} color={colors.primary} onPress={() => goBack()} />              
              </View>          
                <Text style={styles.blueButtonText}>Buat Akun Corporate</Text>
            </View>

            <View style={{ padding:'5%', marginBottom:'15%', marginTop:'5%' }} >
              <View style={styles.rowDirection}>
                <View style={{ paddingLeft:'2%', width:'40%' }} >
                  <Text style={styles.blueTextNormalSize}>Badan usaha</Text>
                <View style={styles.rowDirection}>
                  <View style={styles.corporatePickerContainer}>
                    <Picker
                      style={styles.corporatePickerStyle}
                      mode='dropdown'>
                      <Picker.Item label="" value="java" color={colors.primary} />
                      <Picker.Item label="" value="js" color={colors.primary} />
                    </Picker>
                  </View>
                    <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
                  </View>
                </View>
                <View style={{ width:'60%' }} >
                  <Text style={styles.blueTextNormalSize}> Email</Text>
                  <TextInput
                    underlineColorAndroid={colors.primary}
                    style={styles.registrationTextInput}
                    placeholder='Email'  
                  />
                </View>
              </View>

              <Text style={styles.blueTextNormalSize}> Alamat Perusahaan</Text>
              <TextInput
                underlineColorAndroid={colors.primary}
                style={styles.registrationTextInput}
                placeholder='Alamat Perusahaan'  
              />
              
              <View style={styles.rowDirection}>
                <View style={{ paddingLeft:'2%', width:'40%' }} >
                  <Text style={styles.blueTextNormalSize}>Provinsi</Text>
                <View style={styles.rowDirection}>
                  <View style={styles.corporatePickerContainer}>
                    <Picker
                      style={styles.corporatePickerStyle}
                      mode='dropdown'>
                      <Picker.Item label="" value="java" color={colors.primary} />
                      <Picker.Item label="" value="js" color={colors.primary} />
                    </Picker>
                  </View>
                    <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
                  </View>
                </View>
                <View style={{ paddingLeft:'2%', width:'40%' }} >
                  <Text style={styles.blueTextNormalSize}>Kota</Text>
                <View style={styles.rowDirection}>
                  <View style={styles.corporatePickerContainer}>
                    <Picker
                      style={styles.corporatePickerStyle}
                      mode='dropdown'>
                      <Picker.Item label="" value="java" color={colors.primary} />
                      <Picker.Item label="" value="js" color={colors.primary} />
                    </Picker>
                  </View>
                    <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
                  </View>
                </View>
              </View>

              <View style={{ paddingLeft:'2%', width:'40%' }} >
                <Text style={styles.blueTextNormalSize}>Kecamatan</Text>
                <View style={styles.rowDirection}>
                  <View style={styles.corporatePickerContainer}>
                    <Picker
                      style={styles.corporatePickerStyle}
                      mode='dropdown'>
                      <Picker.Item label="" value="java" color={colors.primary} />
                      <Picker.Item label="" value="js" color={colors.primary} />
                    </Picker>
                  </View>
                  <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(27)} />
                </View>
              </View>  
              <View style={{ marginTop:'5%' }}>
                <Text style={styles.blueTextNormalSize}> Email</Text>
                  <TextInput
                    underlineColorAndroid={colors.primary}
                    style={styles.registrationTextInput}
                    placeholder='example@domain.com'  
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
            </View> 

            <Button style={styles.smallBlueButton} onPress={() => navigate('CorporateRegister2')} >
              <Text style={styles.whiteNormalText}>Lanjut</Text>
            </Button>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
