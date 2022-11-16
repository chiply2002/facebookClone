import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {authentication} from '../firebase/firebase-config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import FacebookCover from '../assets/facebook-logo.jpg';
import Eye from '../assets/eye.png';
import EyeClose from '../assets/eye_close.png';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  // const [isSignIn, setIsSignIn] = useState(false);

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log(re);
        // setIsSignIn(true);
      })
      .catch(re => {
        console.log(re);
      });
  };

  const validateForm = () => {
    var form_inputs = [name, email, phone, password, confirmPassword];
    var password_match = password == confirmPassword;

    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      console.log('Please fill in all fields');
    }

    if (!password_match) {
      console.log('Wrong Pass');
    }

    if (password_match) {
      RegisterUser();
    }
  };

  return (
    <View>
      <Image
        source={FacebookCover}
        style={{width: '100%', height: 220, marginTop: 10, marginBottom: 15}}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        onChangeText={text => setPhone(text)}
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
          placeholder="Enter confirm password"
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={!showCPass}
        />
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
          onPress={() => setShowCPass(!showCPass)}>
          <Image
            source={showCPass ? EyeClose : Eye}
            style={{
              height: 20,
              width: 20,
              tintColor: 'gray',
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Button title="Sign Up" onPress={validateForm} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 15}}>Already have an account?</Text>
        <Text
          style={{fontSize: 15, marginLeft: 5, color: 'red'}}
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;

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
