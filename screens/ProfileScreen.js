import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Feed from '../components/Feed';
import {postArray} from '../DummyData';
import ProfileCover from '../components/ProfileCover';
import FeaturedPhotos from '../components/FeaturedPhotos';

const ProfileScreen = ({route, navigation}) => {
  const {user} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Feed
        posts={postArray}
        navigation={navigation}
        header={
          <>
            <ProfileCover user={user} />
            <FeaturedPhotos />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
