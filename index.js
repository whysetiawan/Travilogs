import { AppRegistry } from 'react-native';
import App from './App';
import Router from './app/configs/router';
import React from 'react';
import TravilogsHeader from './app/components/TravilogsHeader';

const Application = () => (
  <Router screenProps={TravilogsHeader} />
)

AppRegistry.registerComponent('travilogs', () => Application );
