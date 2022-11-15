import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Facebook</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button}>
          <Feather name="search" size={29} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={29}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    paddingRight: 11,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  text: {
    color: '#3a86e9',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
});
