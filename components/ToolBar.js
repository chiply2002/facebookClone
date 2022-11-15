import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import {AddNewPost} from '../redux/postActions';

const ToolBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    const post = {
      id: Math.random(1000),
      user: {
        id: 6,
        username: 'DemoUser',
        profilePicture:
          'https://images.pexels.com/photos/3016320/pexels-photo-3016320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      post: {
        id: 6,
        desc: input,
        photo: null,
        date: Date.now(),
      },
      likes: 0,
      comments: 0,
    };
    dispatch(AddNewPost(post));
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Avatar source="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <TextInput
            placeholder="What's on your mind?"
            onChangeText={setInput}
          />
          {input.length > 0 && (
            <Feather
              name="send"
              size={20}
              color="#3a86e9"
              style={{position: 'absolute', right: 10}}
              onPress={handleSend}
            />
          )}
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={styles.menu}>
            <Ionicons name="ios-videocam" size={22} color="#F44337" />
            <Text style={styles.menuText}>Live</Text>
          </View>
          <View style={styles.menu}>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4CAF50"
            />
            <Text style={styles.menuText}>Photo</Text>
          </View>
          <View style={styles.menu}>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#E141FC"
            />
            <Text style={styles.menuText}>Room</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 92,
    marginLeft: 5,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'ffffff',
    width: '100%',
    paddingRight: 11,
    alignItems: 'center',
  },
  input: {
    height: 50,
    paddingRight: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },
  menuText: {
    paddingLeft: 11,
    fontWeight: '500',
    fontSize: 12,
  },
  sperator: {
    width: 1,
    height: 26,
    backgroundColor: '#f0f0f0',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f0f0',
  },
});
