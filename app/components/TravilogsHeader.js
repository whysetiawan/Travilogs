import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../helpers/constants';

const onDefault = {
  title: (
  <Image
    source={require('../assets/images/logo-travilogs-text.png')} />),
  headerStyle: {
    backgroundColor: colors.primary,
    borderWidth:0,
    elevation:0
  },
  headerTitleStyle: {
    flex:1,
    alignItems:'center',
    textAlign:'center'
  },
  headerLeft: <View/>,
  headerRight: <View />
}

export default TravilogsHeader = (props) => {
  const {
    title,
    headerStyle,
    headerLeft,
    headerRight,
    headerTitleStyle
  } = props;
  return {
    title:
    headerStyle,
    headerLeft,
    headerRight,
    headerTitleStyle,
  }
}

TravilogsHeader.defaultProps= onDefault;

TravilogsHeader.PropTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  headerStyle: PropTypes.object,
  headerTitleStyle: PropTypes.object,
  headerLeft: PropTypes.element,
  headerRight: PropTypes.element
}