import { StackNavigator } from 'react-navigation';
import {
  SplashScreen,
  Menu,
  Register,
  PersonalRegister,
  PersonalDataRegister,
  Signin,
  CorporateRegister,
  CorporateRegister2
} from '../../screens/LoggedOut';
import { Homepage } from '../../screens/LoggedIn/index';


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
  },
  CorporateRegister2: {
    screen: CorporateRegister2
  },
  Homepage: {
    screen: Homepage
  }
}, {
  initialRouteName: 'Homepage'
})