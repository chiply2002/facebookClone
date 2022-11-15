import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {postArray} from '../DummyData';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationScreen = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.heaederContainer}>
        <Text style={styles.text}>Notification</Text>

        <TouchableOpacity style={styles.button}>
          <Feather name="search" size={29} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={postArray}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: item.user.profilePicture}}
                />
              </View>

              <View style={{flexDirection: 'row', marginLeft: 15}}>
                <View>
                  <Text style={{color: '#1B6ADF', fontSize: 15}}>
                    {item.user.username}
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#646768', marginLeft: 5, fontSize: 15}}>
                    {item.user.notification}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity style={{margin: 15}}>
                <MaterialCommunityIcons name="dots-vertical" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    padding: 15,
    alignItems: 'center',
  },
  heaederContainer: {
    width: '100%',
    height: 58,
    paddingRight: 11,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
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
    marginLeft: 5,
  },
});
