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
import RoundedIcon from '../../components/RoundedIcon';

const lorem = 'Lorem Ipsum sit dolor amet'

export default class SearchResult extends Component {
  
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
          <ImageBackground
            source={require('../../assets/images/box.png')}
            style={{ width: '100%', height: deviceHeight * 0.13 }}
            resizeMethod='resize'
            resizeMode='stretch'
          >
            <View style={[styles.rowSpaceBetweenDirection, { padding: '2%' }]}>
              <View style={{ width:'40%' }}>
                <Text style={styles.semiBigWhiteText}>Kota Asal</Text>
                <View style={{ width:'100%', backgroundColor:colors.white, padding:'1%' }}>
                  <Text style={styles.blueTextNormalSize}>Jakarta (JKT)</Text>
                </View>
              </View>
              <View style={{ width:'40%' }}>
                <Text style={styles.semiBigWhiteText}>Kota Tujuan</Text>
                <View style={{ width:'100%', backgroundColor:colors.white, padding:'1%' }}>
                  <Text style={styles.blueTextNormalSize}>Malang (MLG)</Text>
                </View>
              </View>
            </View>
          </ImageBackground> 
          <View style={styles.searchResultsContainer}>
            <View style={styles.searchResultsWrapperRowContainer}>
              <Text style={[styles.blueButtonText, { fontWeight: 'bold', marginTop: '10%' }]}>1.</Text>
              <Image
                source={require('../../assets/images/ic_truck_biru.png')}
                style={{ width:'50%', marginRight: '5%' }}
                resizeMethod='resize'
                resizeMode='contain'
              />
            </View>
            <View style={styles.searchResultsWrapperContainer2}>
              <Text style={[styles.semiBigBlueText, { fontWeight:'bold' }]}>TRUCKING</Text>
              <Text style={styles.defaultSmallText} >JAKARTA SELATAN > JAKARTA (TJ PRIOK)</Text>
            </View>
            <View style={styles.searchResultsWrapperContainer3}>
              <Text style={styles.vsmallBlueBoldText}>Tidak Perlu <Icon name="md-close" size={normalize(22)} /></Text>
            </View>
          </View>
          <Image
            style={{ width:'96%', alignSelf:'center'  }}
            source={require('../../assets/images/tr-arrow.png')}
          />
          <View style={styles.searchResultsContainer}>
            <View style={styles.searchResultsWrapperRowContainer}>
              <Text style={[styles.blueButtonText, { fontWeight: 'bold', marginTop: '10%' }]}>2.</Text>
              <Image
                source={require('../../assets/images/ic_kapal_biru.png')}
                style={{ width:'50%', marginRight: '5%' }}
                resizeMethod='resize'
                resizeMode='contain'
              />
            </View>
            <View style={styles.searchResultsWrapperContainer2}>
              <Text style={[styles.semiBigBlueText, { fontWeight:'bold' }]}>SHIPPING TRANSIT</Text>
              <Text style={styles.defaultSmallText} >JAKARTA (TJ PRIOK) > SURABAYA (TJ PERAK)</Text>
            </View>
            <View style={styles.searchResultsWrapperContainer3}>
              <Text style={styles.vsmallBlueBoldText}>Tidak Perlu <Icon name="md-close" size={normalize(22)} /></Text>
            </View>
          </View>
          <Image
            style={{ width:'96%', alignSelf:'center'  }}
            source={require('../../assets/images/tr-arrow.png')}
          /><View style={styles.searchResultsContainer}>
            <View style={styles.searchResultsWrapperRowContainer}>
              <Text style={[styles.blueButtonText, { fontWeight: 'bold', marginTop: '10%' }]}>3.</Text>
              <Image
                source={require('../../assets/images/ic_truck_biru.png')}
                style={{ width:'50%', marginRight: '5%' }}
                resizeMethod='resize'
                resizeMode='contain'
              />
            </View>
            <View style={styles.searchResultsWrapperContainer2}>
              <Text style={[styles.semiBigBlueText, { fontWeight:'bold' }]}>TRUCKING</Text>
              <Text style={styles.defaultSmallText} >JAKARTA SELATAN > JAKARTA (TJ PRIOK)</Text>
            </View>
            <View style={styles.searchResultsWrapperContainer3}>
              <Text style={styles.vsmallBlueBoldText}>Tidak Perlu <Icon name="md-close" size={normalize(22)} /></Text>
            </View>
          </View>
          <Image
            style={{ width:'96%', alignSelf:'center', marginBottom:'15%'  }}
            source={require('../../assets/images/tr-line.png')}
          />
          
          <Button style={styles.smallBlueButton} onPress={() => navigate('SetSchedule')} >
            <Text style={styles.whiteNormalText}>LANJUT</Text>
          </Button>
        </View>
      </ScrollView>
    )
  }
}