import React from 'react';
import { 
  TouchableNativeFeedback,
  View,
  ViewPropTypes
} from "react-native";
import PropTypes from 'prop-types';

export default Button = (props) => (
  <TouchableNativeFeedback
    onPress={props.onPress}
  >
    <View style={props.style} >
      {props.children}
    </View>
  </TouchableNativeFeedback>
)

Button.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
}