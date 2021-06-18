import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../Components/Header';
import SubHading from '../../Components/SubHading';
import styles from './Styles';

const index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header Navigation={navigation} />
      <SubHading Name="Profile Screen" />
    </SafeAreaView>
  );
};

export default index;
