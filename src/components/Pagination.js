import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';

const Pagination = ({data, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, idx === index && styles.dotActive]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#D1D1D152',
    marginHorizontal: 3,
    borderRadius: 6,
  },
  dotActive: {
    backgroundColor: '#5DA7A3',
  },
});

export default Pagination;
