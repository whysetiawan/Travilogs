import { StackNavigator } from 'react-navigation';
import {
  SplashScreen,
  Menu,
  Register,
  PersonalRegister,
  PersonalDataRegister,
  Signin,
  CorporateRegister
} from '../../screens/LoggedOut';

export default StackNav = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Menu: {
    screen: Menu
  },
  Register: {
    screen: Register
  },
  PersonalRegister: {
    screen: PersonalRegister
  },
  PersonalDataRegister: {
    screen: PersonalDataRegister
  },
  Signin: {
    screen: Signin
  },
  CorporateRegister: {
    screen: CorporateRegister
  }
}, {
  initialRouteName: 'CorporateRegister'
})