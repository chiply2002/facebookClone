import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const Avatar = ({source, online, story}) => {
  return (
    <View style={styles.containter}>
      <Image style={styles.userImage} source={{uri: source}} story={story} />
      {online === 'true' && <View style={styles.userActive} />}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  containter: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#1777f2',
    borderWidth: 2,
    // ${(props) => (props.story ? "2px" : 0)}
  },
  userActive: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#4bcb1f',
    position: 'absolute',
    bottom: -2,
    right: -2,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});
