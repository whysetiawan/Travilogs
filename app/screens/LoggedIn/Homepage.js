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
  ScrollView,
  ImageBackground
} from 'react-native';
import { 
  deviceWidth,
  deviceHeight,
  colors
} from '../../helpers/constants';
import styles from '../../assets/styles';
import Button from '../../components/Button';
import { Card, normalize, Avatar, FormInput } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';



export default class Homepage extends Component {
  
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
    headerLeft: <Icon name="md-menu" size={normalize(30)} color={colors.white} style={{ margin: 15 }} />,
    headerRight: (
      <Avatar
        imageProps={{ resizeMode: 'cover', resizeMethod:'resize' }}
        source={require('../../assets/images/avatar.png')}
        rounded
        containerStyle={{ margin:15 }}
        small
      />
    )
  })
  
  render(){
    return (
      <ScrollView style={{ minHeight: deviceHeight }}>
        <View style={[styles.container, styles.bgPrimary]}>
          <ImageBackground
            source={require('../../assets/images/background-home.png')}
            style={{ width: '100%', height: deviceHeight * 0.35, }}
            resizeMethod='resize'
            resizeMode='stretch'
          >
            <View style={{ height: '100%', backgroundColor: 'rgba(0,0,0, 0.5)' }}>
              <View style={styles.rowDirection}>
                <View style={{ width:'50%' }}>
                  <Text style={styles.superTextHome}>75%</Text>
                </View>
                <View style={{ width:'50%', justifyContent:'center' }}>
                  <Text style={styles.whiteNormalText}>
                    <Text>Potongan Pengiriman{'\n'}</Text>
                    <Text  style={{ fontWeight:'bold', fontSize: normalize(16) }}>Dengan Menggunakan {'\n'}MERATUS</Text>
                  </Text>
                </View>
              </View>

              <View style={styles.dashedContainer}>
                <Text style={styles.whiteButtonText}>MERATUS75THN</Text>
              </View>
            </View>
          </ImageBackground>
          <Card containerStyle={[styles.defaultCard, { bottom: deviceHeight * 0.07 }]} >
            <Text style={styles.blueTextNormalSize}>Kota Asal</Text>
            <View style={{ borderWidth:1, borderColor: colors.primary }}>
              <TextInput
                style={styles.blueButtonText}
                underlineColorAndroid='transparent' />
            </View>
            
            <Text style={[styles.blueTextNormalSize, { marginTop: 15 }]}>Tujuan</Text>
            <View style={{ borderWidth:1, borderColor: colors.primary }}>
              <TextInput
                style={styles.blueButtonText}
                underlineColorAndroid='transparent' />
            </View>
            <Button onPress={() => alert('search')} style={[styles.homeYellowButton, { marginTop: deviceHeight * 0.03, }]}>
              <Icon name="md-search" color={colors.primary} size={normalize(18)} ><Text style={styles.blueTextNormalSize}> Cek Pengiriman </Text> </Icon>
            </Button>
          </Card>
          <View style={styles.homeContentContainer}>
            <View style={styles.rowDirection}>
              <ImageBackground
                style={{ width:'50%', height: deviceHeight * 0.1 }}
                source={require('../../assets/images/ship-icon.png')} >

              </ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}