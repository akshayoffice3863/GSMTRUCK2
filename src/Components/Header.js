import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import menu from '../../assets/Images/menu.png';
import COLOR from '../helper/colors';
import logout from '../../assets/Images/logout.png';
const Header = ({Navigation}) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity onPress={() => Navigation.toggleDrawer()}>
        <Image source={menu} style={styles.menu} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate("Login")}>
        <Image source={logout} style={styles.menu} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLOR.WHITE,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menu: {
    width: 30,
    height: 30,
    tintColor: COLOR.BLUE,
  },
});
