import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MealsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>meals screen</Text>
      <Button
        title="Click here"
        onPress={() => alert('Button clicked')}></Button>
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8FCBBc',
  },
});
