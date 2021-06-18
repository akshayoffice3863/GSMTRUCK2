import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import Styles from './style';
import COLORS from '../../helper/colors';
const Login = ({ navigation }) => {
  // STATE
  const [LoginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  //const [EmailValidation, setEmailValidation] = useState(true);
  //const [PasswordValidation, setPasswordValidation] = useState(true);

  // LOGIC

  const onPressHandler = () => {
    // if (LoginData.email.length > 8) {
    //   setEmailValidation(false);
    // }
    // if (LoginData.password.length > 8) {
    //   setPasswordValidation(false);
    // }
    // if (!EmailValidation && !PasswordValidation) {
    //   navigation.navigate('Booking');
    // }
    navigation.navigate("BookingSchedule")
  };

  //  COMPONENT
  const renderComponent = () => {
    return (
      <View style={{ marginHorizontal: 30 }}>
        <View>
          <Text style={Styles.Hading}>Verify Yourself !</Text>
        </View>
        <View>
          <TextInput
            placeholder="Enter Email ID"
            placeholderTextColor={COLORS.GRAY}
            style={Styles.TextInput}
            onChangeText={e => {
              setLoginData({
                ...LoginData,
                email: e,
              });
            }}
          />
          {/* {!EmailValidation ? null : (
            <Text style={Styles.errorMsg}>
              Email must be 8 characters long.
            </Text>
          )} */}
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={COLORS.GRAY}
            style={Styles.TextInput}
            onChangeText={e => {
              setLoginData({
                ...LoginData,
                password: e,
              });
            }}
          />
          {/* {!PasswordValidation ? null : (
            <Text style={Styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          )} */}
        </View>
        <View style={Styles.ButtonContainer}>
          <TouchableOpacity
            style={Styles.Button}
            onPress={() => {
              onPressHandler();
            }}>
            <Text style={Styles.ButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView style={Styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <KeyboardAvoidingView>
            {renderComponent()}
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  };
  return renderMainView();
};

export default Login;