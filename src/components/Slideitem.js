import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import Images from '../contants/Images';

const {width, height} = Dimensions.get('screen');
const Slideitem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.SLIDERIMAGE}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
  },
  image: {},
});

export default Slideitem;
