import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import Images from '../contants/Images';
import Fonts from '../contants/Fonts';
import SigninScreen from './SigninScreen';

const SplashScreen = ({navigation}) => {
  useEffect ( () => {
    setTimeout( () => {
      navigation.replace('SigninScreen')
    },3000)
  })
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      <ImageBackground
        source={Images.BackgroundImg}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <Text style={styles.titleText}>IROID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: '#000000',
    fontSize: 34,
    fontFamily: Fonts.ShurikenBoyStd,
    marginTop: -354,
  },
});

export default SplashScreen;
