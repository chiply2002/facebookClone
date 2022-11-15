import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Avatar from '../components/Avatar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Menu</Text>
        <TouchableOpacity style={styles.search}>
          <Feather name="search" size={29} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar source="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Text style={{marginLeft: 5, fontSize: 15, color: 'black'}}>
            Name
          </Text>
        </View>

        <TouchableOpacity style={{marginRight: 15}}>
          <AntDesign name="downcircleo" size={29} />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuChild}>
          <FontAwesome5 name="newspaper" size={25} color="grey" />
          <Text>New feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuChild}>
          <FontAwesome5 name="user-friends" size={25} color="blue" />
          <Text>Friends</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuChild}>
          <FontAwesome5 name="desktop" size={25} color="orange" />
          <Text>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuChild}>
          <AntDesign name="calendar" size={25} color="red" />
          <Text>Events</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity
        style={{
          marginTop: 10,
          marginLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Feather name="help-circle" size={29} color="grey" />
          <Text style={{marginLeft: 5}}>Help</Text>
        </View>
        <View>
          <FontAwesome5
            style={{marginRight: 15}}
            name="chevron-down"
            size={18}
            color="black"
          />
        </View>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={{
          marginTop: 10,
          marginLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Feather name="settings" size={29} color="grey" />
          <Text style={{marginLeft: 5}}>Setting & Privacy</Text>
        </View>
        <View>
          <FontAwesome5
            style={{marginRight: 15}}
            name="chevron-down"
            size={18}
            color="black"
          />
        </View>
      </TouchableOpacity>

      <View style={styles.button}>
        <Button title="Logout" color="lightgray" />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  profileContainer: {
    width: '97%',
    height: 58,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginLeft: 5,
    paddingLeft: 12,
    borderRadius: 10,
  },
  headerContainer: {
    width: '100%',
    height: 58,
    paddingRight: 11,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
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
    marginLeft: 5,
  },
  menuContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuChild: {
    width: '48%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  divider: {
    marginTop: 15,
    width: '100%',
    height: 1,
    backgroundColor: 'lightgrey',
  },
  button: {
    margin: 15,
  },
});
