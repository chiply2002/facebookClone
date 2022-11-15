import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StoryItem = ({item, friends, profilePicture}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardStory}
        source={{uri: friends ? item.story.photo : profilePicture}}
      />
      <View style={styles.cardUser}>
        {friends ? (
          <Avatar source={item.user.profilePicture} story />
        ) : (
          <AntDesign name="plus" size={24} color="#1777f2" />
        )}
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.text}>
          {friends ? item.user.username : 'Add to story'}
        </Text>
      </View>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  card: {
    width: 106,
    height: 170,
    position: 'relative',
    marginRight: 8,
  },
  cardStory: {
    width: '100%',
    height: 170,
    borderRadius: 12,
  },
  cardUser: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    width: '100%',
    position: 'absolute',
    bottom: 12,
    left: 9,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
