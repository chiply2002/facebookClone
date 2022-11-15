import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {authentication} from '../firebase/firebase-config';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';

import FacebookCover from '../assets/facebook-logo.jpg';
import Eye from '../assets/eye.png';
import EyeClose from '../assets/eye_close.png';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = authentication.onAuthStateChanged(user =>
      setCurrentUser(user),
    );
    return user;
  }, []);
  // const login = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  // const user = authentication.auth().currentUser;

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(err => {
        navigation.navigate('MyProfileScreen');
        console.log('login');
        setIsSignIn(true);
      })
      .catch(err => console.log(err));
  };

  const SignOutUser = () => {
    signOut(authentication)
      .then(err => {
        setIsSignIn(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Image
        source={FacebookCover}
        style={{width: '100%', height: 220, marginTop: 10, marginBottom: 15}}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email or phone number"
        onChangeText={text => setEmail(text)}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 0.5,
          }}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={!showPass}
        />
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
          onPress={() => setShowPass(!showPass)}>
          <Image
            source={showPass ? EyeClose : Eye}
            style={{
              height: 20,
              width: 20,
              tintColor: 'gray',
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
      </View>
      {isSignIn == true ? (
        <View style={styles.button}>
          <Button title="Sign Out" onPress={SignOutUser} />
          <View>
            <Text>{currentUser.email}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.button}>
          <Button title="Sign In" onPress={SignInUser} />
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 15}}>Don't have an account?</Text>
        <Text
          style={{fontSize: 15, marginLeft: 5, color: 'red'}}
          onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.5,
  },
  button: {
    margin: 10,
  },
});
