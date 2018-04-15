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
    width:'25%',
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
  }
})