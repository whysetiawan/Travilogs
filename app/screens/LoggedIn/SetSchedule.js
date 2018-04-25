import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput,
  Picker as PickerAndroid,
  PickerIOS,
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
import { Card, normalize, Avatar, FormInput, CheckBox } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import RoundedIcon from '../../components/RoundedIcon';

const lorem = 'Lorem Ipsum sit dolor amet';
const Picker = Platform.select({
  android: PickerAndroid,
  ios: PickerIOS
})

export default class SetSchedule extends Component {
  
  static navigationOptions = ({ navigation }) => ({
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
    headerLeft: (
      <TouchableNativeFeedback onPress={() => navigation.goBack()} >
        <View style={[styles.rowDirection, { alignItems:'center' }]}>
          <Icon name="ios-arrow-back" size={normalize(30)} color={colors.white} style={{ margin: 15 }} /> 
          <Text style={styles.whiteNormalText}>Back</Text>
        </View>
      </TouchableNativeFeedback>
    ),
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
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={{ minHeight: deviceHeight }} >
        <View style={[styles.container, { backgroundColor: colors.white }]}>
          <View style={styles.headerSetSchedule}>
            <Text style={styles.whiteNormalText}>Atur Jadwal Kapal</Text>
          </View>
          <View style={styles.headerSetSchedule2}>
            <View style={[styles.rowDirection, { alignItems: 'center' }]}>
              <Text style={styles.whiteBoldNormalText}>Jakarta</Text>            
              <Icon name="md-arrow-dropright" style={{ marginHorizontal:'3%' }} size={normalize(40)} color={colors.white} />
              <Text style={styles.whiteBoldNormalText}>Surabaya</Text>   
            </View>
          </View>
          <View style={styles.stepsContainer}>            
            <RoundedIcon
              style={styles.stepsPrimary}
              source={require('../../assets/images/ic_kapal.png')}
            />
            <View style={styles.stepsLine}/>
            <RoundedIcon
              style={styles.stepsGray}
              source={require('../../assets/images/ic_truck.png')}
            />
            <View style={styles.stepsLine}/>
            <RoundedIcon
              style={styles.stepsGray}
              source={require('../../assets/images/ic_truck.png')}
            />
          </View>
          <View style={{ padding: '7%' }}>
            <Text style={styles.semiBigBlueText}>Periode Berangkat</Text>
            <Button
              onPress={ () => alert('This is a button')}
              style={styles.borderedButtonPrimary}
            >
              <Text style={styles.blueTextNormalSize}>Minggu, 22 April 2018</Text>
              <Icon name="md-arrow-dropdown" size={normalize(30)} color={colors.primary} />
            </Button>

            <View style={[styles.rowSpaceBetweenDirection, { marginTop:'5%' }]}>
              <View style={[styles.rowSpaceBetweenDirection, { width:'50%' }]}>
                <View style={{ width:'65%' }}>
                  <Text style={styles.blueTextNormalSize}>Kontainer</Text>
                  <Button
                    onPress={ () => alert('This is a button')}
                    style={styles.borderedButtonPrimary}
                  >
                    <Text style={styles.blueTextNormalSize}>20"</Text>
                    <Icon name="md-arrow-dropdown" size={normalize(30)} color={colors.primary} />
                  </Button>
                </View>
                <View style={{ width:'30%' }}>
                  <Text style={styles.blueTextNormalSize}>Jumlah</Text>
                  <Button
                    onPress={ () => alert('This is a button')}
                    style={styles.borderedButtonPrimary}
                  >
                    <Text style={styles.blueTextNormalSize}>1</Text>
                    <Icon name="md-arrow-dropdown" size={normalize(30)} color={colors.primary} />
                  </Button>  
                </View>              
              </View>
              <View style={{ width: '45%' }}>
                <Text style={styles.blueTextNormalSize}>Muatan</Text>
                <Button
                  onPress={ () => alert('This is a button')}
                  style={styles.borderedButtonPrimary}
                >
                  <Text style={styles.blueTextNormalSize}>Others</Text>
                  <Icon name="md-arrow-dropdown" size={normalize(30)} color={colors.primary} />
                </Button>
              </View>
            </View>

            <View style={[styles.rowSpaceBetweenDirection, { marginTop:'5%' }]}>
              <View style={{ width:'50%' }}>
                <Text style={styles.blueTextNormalSize}>Jenis Transaksi</Text>
                <Button
                  onPress={ () => alert('This is a button')}
                  style={styles.borderedButtonPrimary}
                >
                  <Text style={styles.blueTextNormalSize}>Regular</Text>
                  <Icon name="md-arrow-dropdown" size={normalize(30)} color={colors.primary} />
                </Button>  
              </View>
              <View style={{ width: '45%' }}>
                <Text style={styles.blueTextNormalSize}>Jenis Muatan</Text>
                <Text style={styles.blueTextNormalSize}>Cargo</Text>
              </View>
            </View>
            
            <Text style={[styles.blueTextNormalSize, { marginTop: '5%' }]}>Deskripsi Muatan</Text>
              <View style={styles.blueBorderContainer}>            
                <TextInput
                  style={styles.blueTextNormalSize}
                  underlineColorAndroid='transparent' />
              </View>

              

            <View style={{ marginTop: '10%' }}>
              <CheckBox
                title={<Text style={[styles.blueTextNormalSize, { marginLeft:'2%' }]}>COC </Text> }
                textStyle={[styles.normalItalicText, { color: '#222', fontWeight: '100', fontSize: normalize(12) }]}
                containerStyle={{ backgroundColor: 'transparent', borderWidth:0, padding:0, margin:0  }}
              />
              <CheckBox
                title={<Text style={[styles.blueTextNormalSize, { marginLeft:'2%' }]}>Kontainer Pendingin, <Text style={{ color: '#CCCCCC' }}>Untuk memuat barang yang membutuhkan pendingin</Text> </Text> }
                textStyle={[styles.normalItalicText, { color: '#222', fontWeight: '100', fontSize: normalize(12) }]}
                containerStyle={{ backgroundColor: 'transparent', borderWidth:0, padding:0, margin:0  }}
              />
            </View>

            <Button style={[styles.smallBlueButton, { marginTop:'10%' }]} onPress={() => navigate('ShipResult')} >
              <Text style={styles.whiteNormalText}>CARI</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}