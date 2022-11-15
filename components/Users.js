import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {users} from '../DummyData';

const Users = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={10}
        renderItem={({item}) => (
          <View style={styles.user}>
            <Avatar source={item.profilePicture} online={item.online} />
          </View>
        )}
        style={{paddingLeft: 11}}
        ListHeaderComponent={() => (
          <TouchableOpacity style={styles.room}>
            <MaterialCommunityIcons
              style={{marginTop: 5}}
              name="video-plus"
              size={26}
              color="E141FC"
            />
            <Text style={styles.text}>{`Create Room`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
  },
  room: {
    width: 115,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#82b1ff',
    paddingBottom: 15,
    marginRight: 12,
  },
  text: {
    color: '#1777f2',
    fontSize: 12,
    paddingLeft: 6,
    marginTop: 10,
  },
  user: {
    marginRight: 13,
  },
});
