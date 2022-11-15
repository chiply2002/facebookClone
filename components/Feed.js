import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const Feed = ({posts, navigation, header}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostItem item={item} navigation={navigation} />
        )}
        ListHeaderComponent={() => header}
      />
    </SafeAreaView>
  );
};

export default Feed;
