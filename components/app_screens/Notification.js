import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { windowWidth } from '../../utils/utils';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './Colors';

export default function Notification({ navigation, icon, time, info, chevron }) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <FontAwesome name={icon} size={26} color="#ff375e" />
      </View>
      <View style={styles.text}>
        <Text style={styles.infoText}>
          {info}
        </Text>
        <Text style={styles.timeText}>
          {time}
        </Text>
      </View>
      {chevron ? <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <TouchableOpacity 
          style={styles.arrowView}
          onPress={() => navigation.navigate('MyProfileScreen')}
        >
          <FontAwesome name={chevron} size={14} color="#8E9AA0" />
        </TouchableOpacity>
      </View> : <Text></Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', marginVertical: 14,
  },
  logo: {
    height: 30, width: 30,
    resizeMode: 'cover',
  },
  arrowView: {
    width: 22, height: 22,
    justifyContent: 'center', alignItems: 'center',
    borderColor: Colors.SILVER,
    borderWidth: 2, borderRadius: 50,
  },
  timeText: {
    fontSize: 10, textAlign: 'left', 
    alignSelf: 'stretch',
    marginTop: 4,
    color: Colors.SILVER,
  },
  text: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth - 105,
  },
  infoText: {
    fontSize: 14, 
    color: Colors.ONYX,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
});