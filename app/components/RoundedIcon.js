import React from 'react';
import {
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

export default RoundedIcon = (props) => {
  return(
    <View style={props.style}>
      <Image
        source={props.source}
        style={{ width: '80%', height:'80%' }}
        resizeMethod='resize'
        resizeMode='contain'
      />
      {props.children}
    </View>
  )
}