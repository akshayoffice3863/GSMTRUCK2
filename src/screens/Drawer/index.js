import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import COLORS from '../../helper/colors';
import styles from './style';
import CLOSE from '../../../assets/Images/x.png';




const SideBar = ({navigation}) => {
  const [data, setData] = useState([
    {name: "Booking ID's", id: 'BookingSchedule'},
    {name: 'Drop V/s Pickup', id: 'DropPickup'},
    {name: 'Short Tasks', id: 'ShortTask'},
    {name: 'Profile', id: 'Profile'},
  ]);

  const renderMainView = () => {
    return (
      <SafeAreaView style={styles.container}>
        {/* CLOSE_BTN */}
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.CLOSE_BTN}>
            <Image source={CLOSE} style={{tintColor: COLORS.WHITE}} />
          </TouchableOpacity>
          <View>
            {/* BTN_LIST */}
            <FlatList
              data={data}
              contentContainerStyle={{marginTop: 50}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.DRAWER_BTN}
                    onPress={() => {
                      navigation.navigate(`${item.id}`);
                    }}>
                    <Text style={{color: COLORS.BLUE, fontSize: 17}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        {/* LOGOUT_BTN */}
        <View style={styles.LOGOUT_BTN}>
          <TouchableOpacity
            style={styles.DRAWER_BTN}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{color: COLORS.BLUE, fontSize: 17}}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <StatusBar barStyle="default" />
      </SafeAreaView>
    );
  };

  return renderMainView();
};

export default SideBar;
