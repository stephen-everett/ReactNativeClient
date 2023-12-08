/*
    Styles being used throughout the app
*/


import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow:6,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {
    justifyContent: 'space-between',
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input: {
      backgroundColor:'#FFFFFF',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default styles