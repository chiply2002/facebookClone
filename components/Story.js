import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import StoryItem from './StoryItem';
import {stories} from '../DummyData';

const Story = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={stories}
          horizontal
          initialNumToRender={5}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <StoryItem profilePicture="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          )}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Story', {
                  stories: stories,
                  index: stories.findIndex(s => s === item),
                })
              }>
              <StoryItem item={item} friends />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.bottomDivider} />
    </>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 192,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f0f0',
  },
});
