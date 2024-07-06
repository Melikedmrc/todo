import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, FlatList } from 'react-native';
import { Input, Button, Or, SocialAuthButtons, BottomTabs } from '../shared/sharedImport';
import { loginForm } from "../../../utils/authForms";

const LoginBackground = require('../../../../assets/login.png');



export default function Login({ navigation }) {
  return (
    <View className="flex-1">
      <ImageBackground
        source={LoginBackground}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
      >
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} behavior="padding">
          <View className="items-center justify-center w-full px-5">
            <View className="items-center justify-center">

              <Text className="text-2xl text-Title mb-2">
                Log in to HabitHUB
              </Text>

              <Text className="text-lg text-{#1D2220} mb-4" style={{ textAlign: 'center' }}>
                Welcome back! Sign in using your social account or email to continue us
              </Text>

            </View>

            <View>
              <SocialAuthButtons />
            </View>

            <View>
              <Or />
            </View>

            <View className="w-full">
              <FlatList
                data={loginForm}
                renderItem={({ item }) => (
                  <View className="w-full mt-4 mb-2">
                    <Input placeholder={item.placeholder} />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>

            <View>
              <Button title="Login" onPress={() => navigation.navigate('Transition')} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      {/* <BottomTabs/> */}
    </View>
  );
}
