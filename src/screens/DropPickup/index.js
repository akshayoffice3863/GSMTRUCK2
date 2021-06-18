import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import Header from '../../Components/Header';
import SubHading from '../../Components/SubHading';
import styles from './Styles';
import calendar from '../../../assets/Images/calendar.png';
import {DropPickup} from "../../helper/Data"
const index = ({navigation}) => {
    const [dropPickupData, setDropPickupData] = useState(DropPickup);
  const ScheduleHandler = () => {
    return (
      <View style={styles.Schedule}>
        <View style={styles.ScheduleContainer}>
          <Text style={styles.TimeText}>Today</Text>
          <TouchableOpacity>
            <Image source={calendar} style={styles.ScheduleImg} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header Navigation={navigation} />
      <SubHading Name="Booking Drop Schedule" />
      <ScheduleHandler />
      <View style={styles.ListHeader}>
         <Text style={styles.ListText}>Drop Booking ID</Text>
         <Text style={styles.ListText}>Pickup Booking ID</Text>
      </View>
      <FlatList
        style={{marginHorizontal:20}}
        data={dropPickupData}
         renderItem={({item}) => {
          return (
            <View style={styles.ListContainer}>
              <Text style={styles.item}>{item.DropID}</Text>
              <Text style={styles.item}>{item.PickupID}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
  );
};

export default index;
