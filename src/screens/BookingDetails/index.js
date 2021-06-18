import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import Header from '../../Components/Header';
import SubHading from '../../Components/SubHading';
import calendar from '../../../assets/Images/calendar.png';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const BookingDetails = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedDate, SetSelectedDate] = React.useState({
    GSM_Time_Out: '',
    Port_Time_In: '',
    Port_Time_Out: '',
    GSM_Time_In: '',
  });

  const ModalPop = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  const ChooseFromGlary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setVisible(false);
      console.log(image);
    });
  };

  const SelectFromCamara = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setVisible(false);
      console.log(image);
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // alert(id)
    // SetSelectedDate({
    //   ...selectedDate,
    //   [id]:dat
    // })
    alert(date);

    hideDatePicker();
  };

  const RowData = ({name, Data}) => {
    return (
      <View style={styles.RowContainer}>
        <Text style={styles.Hading}>{name}</Text>
        <Text style={styles.Data}>{Data}</Text>
      </View>
    );
  };

  const TimeData = ({name, Data, id}) => {
    return (
      <TouchableOpacity onPress={showDatePicker} style={styles.RowContainer}>
        <Text style={styles.Hading}>{name}</Text>
        <View style={styles.ScheduleContainer}>
          <Text style={styles.TimeText}>{Data}</Text>
          <Image source={calendar} style={styles.ScheduleImg} />
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
    );
  };

  const UploadBtn = ({name}) => {
    return (
      <View>
        <ModalPop visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <Text style={styles.ModelHeader}> Add Photo </Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require('../../../assets/Images/x.png')}
                  style={{height: 25, width: 25}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 20, alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => {
                SelectFromCamara();
              }}>
              <Text style={styles.ModalBtn}>Take photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ChooseFromGlary();
              }}>
              <Text style={styles.ModalBtn}>Choose from Gallery</Text>
            </TouchableOpacity>
          </View>
        </ModalPop>
        {/* BTN */}
        <View style={[styles.RowContainer, styles.BtnContainer]}>
          <Text style={styles.Hading}>{name}</Text>
          <TouchableOpacity
            style={styles.UploadBtn}
            onPress={() => {
              setVisible(true);
            }}>
            <Text style={styles.UploadBtnText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Header Navigation={navigation} />
        <ScrollView>
          <SubHading Name="Booking Details" />
          {/* BOOKING DETAILS */}
          <RowData name="Booking ID" Data="MAR2021AWB001" />
          <RowData name="Due Date" Data="Empty Container" />
          <RowData name="Seal No" Data="Material on ground" />
          <RowData name="No of Cont" Data="1/4 Full Container" />
          <RowData name="Cont Size" Data="1/2 Full Container" />
          <RowData name="Chassis No" Data="Full Loaded container" />
          <RowData name="Net Weight" Data="One Door Closed" />
          <RowData name="Cont Size" Data="1/2 Full Container" />
          <RowData name="MT" Data="2 Door Closed" />
          <RowData name="DOC C/O" Data="Loaded Scale Photo" />
          <RowData name="Cont. C/O" Data="Seal Photo" />
          <RowData name="Recd C/O" Data="Truck Ticket from Shipping" />
          <RowData name="Customer Name" Data="Truck Ticket from Shipping" />
          <RowData name="Destination" Data="Truck Ticket from Shipping" />
          <TimeData name="GSM Time Out" Data="Today" id="GSM_Time_Out" />
          <TimeData name="Port Time In" Data="Today" id="Port_Time_In" />
          <UploadBtn name="Upload Ticket" />
          {/* SHOW LINKED PICKUP */}
          <SubHading Name="SHOW LINKED PICKUP" />
          <RowData name="Booking ID" Data="Loaded Scale Photo" />
          <TimeData name="Port Time Out" Data="Today" id="Port_Time_Out" />
          <TimeData name="GSM Time In" Data="Today" id="GSM_Time_In" />
          <View style={{marginBottom: 15}}></View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  return renderMainView();
};

export default BookingDetails;
