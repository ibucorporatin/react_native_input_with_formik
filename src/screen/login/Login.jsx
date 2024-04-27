import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../../globalComponents/CustomInput';

const Login = () => {
  return (
    <View>
      <CustomInput
        placeholderTextColor="#807878"
        label="name"
        placeholder="hello"
        type="text"
        error="hello"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
