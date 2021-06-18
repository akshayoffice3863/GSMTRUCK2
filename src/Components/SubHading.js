import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLOR from '../helper/colors';
const SubHading = ({Name}) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.Text}>{Name}</Text>
    </View>
  );
};

export default SubHading;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLOR.BLUE,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text:{
      color:COLOR.WHITE,
      fontSize:20
  }
});
