import { StackNavigator } from 'react-navigation';
import {
  SplashScreen,
  Menu,
  Register,
  PersonalRegister,
  PersonalDataRegister
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
  }
}, {
  initialRouteName: 'PersonalRegister'
})