import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import window from '../Layout';

const StoryScreen = ({route, navigation}) => {
  const {stories, index} = route.params;
  const item = stories[index];

  const handlePress = e => {
    if (e.nativeEvent.locationX < width / 2) {
      stories[index - 1] &&
        navigation.navigate('Story', {stories, index: index - 1});
    } else {
      stories[index + 1]
        ? navigation.navigate('Story', {stories, index: index + 1})
        : navigation.navigate('Home');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={styles.photo} source={{uri: item.story.photo}} />
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={32} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.userInfoContainer}>
        <Image
          style={styles.profilePicture}
          source={{uri: item.user.profilePicture}}
          resizeMode="cover"
        />
        <Text style={styles.username}>{item.user.username}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default StoryScreen;

const {height, width} = window.window;

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  userInfoContainer: {
    position: 'absolute',
    top: 40,
    left: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#808282',
  },
  photo: {
    width: width,
    height: height,
  },
});
