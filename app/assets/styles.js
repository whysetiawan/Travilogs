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
    paddingHorizontal: deviceWidth * 0.1,
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
    marginTop: deviceHeight * 0.1,
    marginBottom: deviceHeight * 0.05,
    alignItems: 'center'
  },
  overlaysContainer: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  boldTitleText: {
    fontWeight:'bold',
    fontSize: normalize(16)
  },
  blueBorderContainer: {
    borderWidth:1,
    borderColor: colors.primary
  },
  roundedIconContainer : {
    height: deviceHeight * 0.125 ,
    width:deviceHeight * 0.125,
    borderRadius: deviceHeight * 0.125,
    borderWidth: 5,
    alignItems:'center',
    justifyContent: 'center',
    borderColor: colors.white
  },
  smallWhiteText: {
    fontSize: normalize(12),
    fontFamily: Avenir,
    color: colors.white
  },
  vsmallBlueBoldText: {
    fontSize: normalize(10),
    fontFamily: Avenir,
    color: colors.primary,
    fontWeight: 'bold'
  },
  semiBigWhiteText: {    
    fontSize: normalize(18),
    color: colors.white,
    fontFamily: 'Avenir Medium'
  },
  semiBigBlueText: {    
    fontSize: normalize(16),
    color: colors.primary,
    fontFamily: 'Avenir Medium'
  },
  searchResultsContainer: {
    padding:'2%',
    height: deviceHeight * 0.13,
    flexDirection:'row',
  },
  searchResultsWrapperRowContainer: {
    width: '25%',
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  defaultSmallText: {
    fontSize: normalize(12),
    fontFamily: Avenir
  },
  searchResultsWrapperContainer2: {
    width:'55%',
    justifyContent:'center'
  },
  searchResultsWrapperContainer3: {
    width:'20%',
    alignItems: 'flex-end'
  },
  headerSetSchedule: {
    backgroundColor: '#1e88e5',
    height: deviceHeight * 0.08,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerSetSchedule2: {
    backgroundColor: colors.primary ,
    height: deviceHeight * 0.08,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteBoldNormalText :{    
    fontFamily: Avenir,
    fontSize: normalize(14),
    color: colors.white,
    fontWeight: 'bold'
  },
  stepsPrimary: {
    height: deviceHeight * 0.05,
    width: deviceHeight * 0.05,
    borderRadius: deviceHeight * 0.05,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepsGray: {
    height: deviceHeight * 0.05,
    width: deviceHeight * 0.05,
    borderRadius: deviceHeight * 0.05,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepsContainer: {
    marginVertical:'3%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row'
  },
  borderedButtonPrimary: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 3 ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})