import { Dimensions } from 'react-native';

const {
  width,
  height
} = Dimensions.get('window');

const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;


const colors = {
  primary: '#2ea1ec',
  white: '#ffffff',
  yellow: '#e2ff06',
  gray: '#c3c3c3'
}

export {
  deviceHeight,
  deviceWidth,
  colors
};