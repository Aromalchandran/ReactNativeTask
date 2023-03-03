import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Fonts from '../contants/Fonts';
import {Display} from '../../utils';
import {Separator} from '../components';
import Images from '../contants/Images';
import Slider from '../components/Slider';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#3BB0EC'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.header} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>IROID</Text>
        <Image source={Images.NOTIFICATIONICON} style={styles.headerImg} />
      </View>
      <SafeAreaView>
        <Separator height={Display.setHeight(2)} />
        <Slider />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#3BB0EC',
    height: 90,
    position: 'absolute',

    width: 900,

    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
    marginHorizontal: 120,
  },
  headerText: {
    fontFamily: Fonts.ShurikenBoyStd,
    fontSize: 34,
    color: '#FFFFFF',
    paddingLeft: 22,
  },
  headerImg: {
    marginLeft: 86,
  },
});

export default HomeScreen;
