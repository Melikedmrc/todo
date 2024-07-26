import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Input, Button, Or, SocialAuthButtons } from '../component/ui/shared/sharedImport';

const backgroundImage = require('../../assets/bg.png');

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={backgroundImage}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View className="flex-1">
        <View className="flex-1 items-start mt-24  w-96 ">
          <Text
          style={{ letterSpacing: 1, lineHeight: 88 , margin:24}} 
          className="font-poppins text-7xl text-black justify-start items-start ">
            Do your tasks quickly and easy
          </Text>
          <Text
          style={{ letterSpacing: -0.5 }} 
          className="font-extralight text- text-black text-xl items-start ml-7 -mt-3">
            Your tasks, your rules, our support.
          </Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="font-light mt-2 mb-5 underline">Create an account</Text>
          </TouchableOpacity>
          <Or/>
          <SocialAuthButtons className="" />
        </View>
      </View>
    </ImageBackground>
  );
}
