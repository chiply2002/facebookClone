import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import window from '../Layout';

const {height, width} = window.window;

const FeaturedPhotos = () => {
  return (
    <View style={{margin: 10}}>
      <Text style={{color: '#6a7180', fontSize: 16}}>FEATURED PHOTOS</Text>
      <View style={styles.photoContainer}>
        <Image
          style={styles.bigPhoto}
          source={{
            uri: 'https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
        <Image
          style={styles.bigPhoto}
          source={{
            uri: 'https://images.pexels.com/photos/3094215/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
      </View>

      <View style={styles.photoContainer}>
        <Image
          style={styles.smallPhoto}
          source={{
            uri: 'https://images.pexels.com/photos/3812041/pexels-photo-3812041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
        <Image
          style={styles.smallPhoto}
          source={{
            uri: 'https://images.pexels.com/photos/3541389/pexels-photo-3812041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
        <Image
          style={styles.smallPhoto}
          source={{
            uri: 'https://images.pexels.com/photos/4063856/pexels-photo-3812041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
      </View>
    </View>
  );
};

export default FeaturedPhotos;

const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bigPhoto: {
    width: width / 2 - 12.5,
    height: width / 2 - 12.5,
    marginRight: 5,
  },
  smallPhoto: {
    width: width / 3 - 10,
    height: width / 3 - 10,
  },
});
