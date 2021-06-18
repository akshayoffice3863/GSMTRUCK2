import React,{useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image, FlatList} from 'react-native';
import Header from '../../Components/Header';
import SubHading from '../../Components/SubHading';
import styles from './Styles';
import calendar from "../../../assets/Images/calendar.png";
import {Data} from "../../helper/Data"
const index = ({navigation}) => {
    const [data, setData] = useState(Data)
  const ScheduleHandler = () => {
    return (
      <View style={styles.Schedule}>
        <View style={styles.ScheduleContainer}>
          <Text style={styles.TimeText}>Today</Text>
          <TouchableOpacity>
            <Image source={calendar} style={styles.ScheduleImg}/>
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
      <FlatList
        style={{marginVertical: 20,marginHorizontal:20}}
        data={data}
         renderItem={({item}) => {
          return (
            <View style={styles.ListContainer}>
              <Text style={styles.item}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("BookingDetails")
                }}>
                <Text style={styles.Btn}>View More</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default index;
