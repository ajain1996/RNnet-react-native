import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/utils';
import { Colors } from '../app_screens/Colors';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 10,
    backgroundColor: Colors.CORAL,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
    fontFamily: 'Lato-Regular',
  },
});