import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {format} from 'timeago.js';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';

const PostItem = ({item, navigation}) => {
  const [likeCounter, setLikeCounter] = useState(item?.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikeCounter(liked ? likeCounter - 1 : likeCounter + 1);
    setLiked(!liked);
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <Avatar source={item?.user?.profilePicture} />
          <View style={{paddingLeft: 10}}>
            <Text
              style={styles.user}
              onPress={() => navigation.navigate('Profile', {user: item.user})}>
              {item?.user?.username}
            </Text>

            <View style={styles.row}>
              <Text style={styles.time}>{format(item?.post?.date)}</Text>
              <Entypo name="dot-single" size={12} color="#747476" />
              <Entypo name="globe" size={10} color="#747476" />
            </View>
          </View>
        </View>
        <Entypo name="dots-three-horizontal" size={15} color="#222121" />
      </View>

      <Text style={styles.post}>{item?.post?.desc}</Text>
      {item?.post?.photo && (
        <Image style={styles.photo} source={{uri: item.post.photo}} />
      )}
      <View style={styles.footer}>
        <View style={styles.footerCount}>
          <View style={styles.row}>
            <View style={styles.iconCount}>
              <AntDesign name="like1" size={12} color="#ffffff" />
            </View>
            <Text style={styles.textCount}>{likeCounter} Likes</Text>
          </View>
          <Text style={styles.textCount}>{item?.comments} Comments</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.footerMenu}>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <View style={styles.icon}>
              {liked ? (
                <AntDesign name="like1" size={20} color="#1878f3" />
              ) : (
                <AntDesign name="like2" size={20} color="#424040" />
              )}
            </View>
            <Text>Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={20}
                color="#424040"
              />
            </View>
            <Text>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="share-outline"
                size={20}
                color="#424040"
              />
            </View>
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingTop: 11,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 11,
  },
  divider: {
    width: '100%',
    height: 5,
    marginTop: 5,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222121',
  },
  time: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#747476',
  },
  post: {
    fontSize: 12,
    color: '#222121',
    lineHeight: 16,
    paddingTop: 0,
    paddingLeft: 10,
  },
  photo: {
    marginTop: 9,
    width: '100%',
    height: 300,
  },
  footer: {
    top: 0,
    marginLeft: 11,
    marginRight: 10,
  },
  footerCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9,
  },
  iconCount: {
    backgroundColor: '#1878f3',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  textCount: {
    fontSize: 11,
    color: '#424040',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f9f9f9',
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    color: '#424040',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f0f0',
  },
});
