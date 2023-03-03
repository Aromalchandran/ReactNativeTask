import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Fonts from '../contants/Fonts';
import {Display} from '../../utils';
import {Separator} from '../components';
import Images from '../contants/Images';
import ApiManager from '../services/AuthenticationService';
import userLogin from '../services/UserAuthenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
 
const SigninScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      userLogin({
        email:email.toLocaleLowerCase(),
        password:password,
      }).then((result) => {
        console.log(result)
        if(result.status == 200) {
          AsyncStorage.setItem("AccessToken",result.data.token)
          navigation.replace("HomeScreen")
        }
      }).catch(err =>{
        console.error()
      })
    } else {
      alert(checkPassword);
    }
  }
 
 

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'#FFFFFF'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Skip</Text>
      </View>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.content}>Enter Your Details</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <TextInput
            placeholder="User Name"
            placeholderTextColor={'#B6B7B7'}
            selectionColor={'#B6B7B7'}
            style={styles.inputText}
            onChangeText={text => setUsername(text)}
          />
        </View>
      </View>
      <Separator height={28} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <TextInput
            secureTextEntry={isPasswordShow ? false : true}
            placeholder="Password"
            placeholderTextColor={'#B6B7B7'}
            selectionColor={'#B6B7B7'}
            style={styles.inputText}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>

      <TouchableOpacity
        style={styles.signinButton}
       
        activeOpacity={0.8}>
        {isLoading ? (
          <LottieView source={Images.LOADING} autoPlay />
        ) : (
          <Text style={styles.signinButtonText}>Sign In</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>

        <Text
          style={styles.signupText}
          onPress={() => console.log('signup clicked')}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 14,
    fontFamily: Fonts.SegoeUI,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    paddingLeft: 260,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.SegoeUI,
    lineHeight: 20 * 1.6,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    color: '#000000',
    fontWeight: '800',
    marginLeft: 132,
  },
  content: {
    fontSize: 14,
    fontFamily: Fonts.SegoeUI,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    color: '#7C7D7E',
    marginLeft: 132,
  },
  inputContainer: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: '#00000008',
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 12,
    textAlignVertical: 'center',
    padding: 16,
    height: Display.setHeight(6),
    color: '#B6B7B7',
    flex: 1,
  },

  signinButton: {
    backgroundColor: '#3BB0EC',
    borderRadius: 24,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 14,
    lineHeight: 18 * 1.4,
    color: '#FFFFFF',
    fontFamily: Fonts.SegoeUI,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    lineHeight: 12 * 1.4,
    color: '#444444',
    fontFamily: Fonts.SegoeUI,
    marginLeft: 108,
    marginTop: 22,
    fontWeight: '700',
  },
  accountText: {
    fontSize: 14,
    lineHeight: 13 * 1.4,
    color: '#7C7D7E',
    fontFamily: Fonts.SegoeUI,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: '#5DA7A3',
    fontFamily: Fonts.SegoeUI,
    marginLeft: 5,
    fontWeight: '800',
  },

  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: '#5DA7A3',
    fontFamily: Fonts.SegoeUI,
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },
});

export default SigninScreen;
