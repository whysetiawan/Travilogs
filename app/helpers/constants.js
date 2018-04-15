import { Dimensions } from 'react-native';

const {
  width,
  height
} = Dimensions.get('window');

const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;


const colors = {
  primary: '#1e88e5',
  white: '#ffffff',
  yellow: '#e2ff06'
}

export {
  deviceHeight,
  deviceWidth,
  colors
};