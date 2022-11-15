import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {authentication} from '../firebase/firebase-config';
import FacebookCover from '../assets/facebook-logo.jpg';
import Ava from '../assets/ava.jpg';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const MyProfileScreen = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = authentication.onAuthStateChanged(user =>
      setCurrentUser(user),
    );
    return user;
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.coverPhoto} source={FacebookCover} />
        <Image style={styles.profilePhoto} source={Ava} />
        {currentUser ? (
          <Text style={styles.name}>{currentUser.email}</Text>
        ) : (
          navigation.navigate('Login')
        )}

        <View style={styles.iconsContainer}>
          <View style={{alignItems: 'center'}}>
            <SimpleLineIcons name="note" size={20} color="#6a7180" />
            <Text style={{color: '#6a7180'}}>Post</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <SimpleLineIcons name="user-follow" size={20} color="#6a7180" />
            <Text style={{color: '#6a7180'}}>Update Info</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <SimpleLineIcons name="chart" size={20} color="#6a7180" />
            <Text style={{color: '#6a7180'}}>Activity Log</Text>
          </View>

          {/* <View style={{alignItems: 'center'}}>
              <SimpleLineIcons
                name="user-following"
                size={20}
                color="#6a7180"
              />
              <Text style={{color: '#6a7180'}}>Friends</Text>
            </View> */}

          <View style={{alignItems: 'center'}}>
            <Feather name="more-horizontal" size={20} color="#6a7180" />
            <Text style={{color: '#6a7180'}}>More</Text>
          </View>
        </View>

        <Text style={styles.desc}>
          🔥 Excepteur duis id cillum ullamco fugiat reprehenderit 🚀
        </Text>
      </View>

      {/* <View style={styles.userInfoContainer}>
        <View style={styles.userInfoItem}>
          <MaterialIcons name="work" size={24} color="#6a7180" />
          <Text style={{color: 'black', marginLeft: 10}}>
            Works at Facebook
          </Text>
        </View>
        <View style={styles.userInfoItem}>
          <FontAwesome name="graduation-cap" size={24} color="#6a7180" />
          <Text style={{color: 'black', marginLeft: 10}}>
            Studied at Swinburne University
          </Text>
        </View>
        <View style={styles.userInfoItem}>
          <Entypo name="location-pin" size={24} color="#6a7180" />
          <Text style={{color: 'black', marginLeft: 10}}>
            From Hanoi, Vietnam
          </Text>
        </View>
      </View> */}
    </>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    top: 150,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  iconsContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  desc: {
    width: '90%',
    marginTop: 20,
    fontSize: 16,
  },
  userInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});
