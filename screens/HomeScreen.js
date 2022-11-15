import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Feed from '../components/Feed';
import {useSelector} from 'react-redux';
import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Story from '../components/Story';

const HomeScreen = ({navigation}) => {
  const {posts} = useSelector(store => store);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Feed
        posts={posts.sort((a, b) => b.post.date - a.post.date)}
        navigation={navigation}
        header={
          <>
            <AppBar />
            <ToolBar />
            <Users />
            <Story navigation={navigation} />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
