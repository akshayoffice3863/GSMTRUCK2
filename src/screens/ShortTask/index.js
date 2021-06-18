import React, {useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import styles from './Styles';
import Header from '../../Components/Header';
import SubHading from '../../Components/SubHading';
import {TaskData} from '../../helper/Data';
const index = ({navigation}) => {
  const [taskData, setTaskData] = useState(TaskData);
  const Hading = ({Name}) => {
    return <Text style={styles.ListHading}>{Name}</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header Navigation={navigation} />
      <SubHading Name="Short Tasks" />
      <View style={styles.ListHadingContainer}>
        <View style={{width: '50%', alignItems: 'flex-start'}}>
          <Hading Name="Containers" />
        </View>
        <View
          style={{
            width: '25%',
            alignItems: 'center',
          }}>
          <Hading Name="Form" />
        </View>
        <View style={{width: '25%', alignItems: 'center'}}>
          <Hading Name="To" />
        </View>
      </View>
      <FlatList
        style={{marginVertical: 20, marginHorizontal: 20}}
        data={taskData}
        renderItem={({item}) => {
          return (
            <View style={styles.ListContainer}>
              <View
                style={{
                  width: '50%',
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.item}>{item.Containers}</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <Text style={styles.item}>{item.From}</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}>
                <Text style={styles.item}>{item.To}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default index;
