import { StyleSheet } from 'react-native';
import { 
  deviceWidth,
  deviceHeight,
  colors
 } from '../helpers/constants';
 import normalize from '../helpers/normalize.js';

 const Avenir = 'Avenir Medium'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgPrimary: {
    backgroundColor: colors.primary
  },
  rowSpaceBetweenDirection: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  centerContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteRoundButton: {
    width: '80%',
    height: deviceHeight * 0.09,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35
  },
  blueButtonText: {
    fontSize: normalize(22),
    color: colors.primary,
    fontFamily: 'Avenir Medium'
  },
  roundButton: {
    width: '80%',
    height: deviceHeight * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: colors.white
  },
  whiteButtonText: {
    fontSize: normalize(22),
    color: colors.white,
    fontFamily: 'Avenir Medium'
  },
  normalItalicText: {
    fontStyle: 'italic',
    fontSize: normalize(14),
    fontFamily: 'Avenir Medium',
    color: colors.white
  },
  blueTextNormalSize: {
    fontFamily: Avenir,
    color: colors.primary,
    fontSize: normalize(14)
  },
  blueTextSuperBigSize: {
    fontFamily: Avenir,
    color: colors.primary,
    fontSize: normalize(28),
    fontWeight: 'bold'
  },
  rowDirection: {
    flexDirection:'row' 
  },
  registerContainer1: {
    width:'100%',
    height:'70%',
    flexDirection:'row',
    marginTop:'7%'
  },
  registerLogoContainer: {
    width:'44%',
    alignItems:'center' 
  },
  registerLogoContainer2: {
    width:'12%',
  },
  registerInsideLogoContainer: {
    width: '100%',
    height:'46%',
  },
  whiteNormalText: {
    fontFamily: Avenir,
    fontSize: normalize(14),
    color: colors.white
  },
  smallBlueButton: {
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.primary,
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.0125,
    height: deviceHeight * 0.06,
    alignSelf:'center',
  },
  oneCardPage: {
    marginHorizontal:'1.5%',
    borderRadius:7,
    height: deviceHeight * 0.82,
  },
  normalBlackText: {
    fontSize: normalize(14),
    fontFamily: Avenir
  },
  registrationTextInput: {
    height: deviceHeight * 0.058,
    fontFamily: Avenir
  },
  dateRegistrationTextInput: {
    height: deviceHeight * 0.058,
    fontFamily: Avenir,
    width:'20%'
  },
  squareImagePicker: {
    width:'30%',
    height: deviceHeight * 0.17,
    backgroundColor: '#CCCCCC'
  },
  personalDataRegisterContainer1: {
    padding:'5%',
    marginBottom:'15%',
    marginTop:'5%'
  },
  personalDateRegisterForm: {
    width:'70%',
    paddingLeft:'2%'
  },
  personalPickerContainer: {
    borderBottomWidth:1,
    borderBottomColor: colors.primary,
    width: '70%'
  },
  smallItalicText :{
    fontStyle: 'italic',
    fontSize: normalize(12),
    fontFamily: 'Avenir Medium',    
  },
  signinYellowButton: {
    backgroundColor: colors.yellow,
    borderWidth:1,
    borderColor: colors.primary,
    borderRadius: 4,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.017,
  },
  signinBlueButton: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.017,
    marginBottom:'3%'
  },
  signinRedButton: {
    backgroundColor: 'red',
    borderRadius: 4,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.017,
    marginBottom:'3%'    
  },
  personalPickerStyle: {
    height: deviceHeight * 0.04,
    backgroundColor: 'transparent',
    width:'90%'
  },
  corporatePickerContainer:{
    borderBottomWidth:1,
    borderBottomColor: colors.primary,
    width: '80%'    
  },
  corporatePickerContainer2:{
    borderBottomWidth:1,
    borderBottomColor: colors.primary,
    width: '100%',
    marginBottom:'3%'
  },
  corporatePickerStyle: {
    height: deviceHeight * 0.04,
    backgroundColor: 'transparent',
    width:'100%'    
  },
  scrollingCardPage : {
    marginHorizontal:'1.5%',
    borderRadius:7,
    marginBottom:'3%'
  },
  superTextHome: {
    fontFamily:Avenir,
    textAlign:'right',
    fontSize: normalize(72),
    color: colors.white
  },
  dashedContainer: {
    alignSelf:'center',
    paddingVertical: deviceHeight * 0.01,
    paddingHorizontal: normalize(20),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 15,
    borderColor: colors.white
  },
  defaultCard: {    
    marginHorizontal:'1.5%',
    borderRadius:7,
    padding:'5%'
  },
  homeYellowButton : {    
    backgroundColor: colors.yellow,
    borderWidth:1,
    borderColor: colors.primary,
    borderRadius: 4,
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    paddingVertical: deviceHeight * 0.01,
    alignSelf:'center'
  },
  homeContentContainer: {
    marginTop: deviceHeight * 0.15,
    paddingHorizontal: '10%'
  }
})