/*
 * Copyright (c) 2011-2018, Zingaya, Inc. All rights reserved.
 */

'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RootStack from './src/routes/routes';


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}