import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, FlatList } from 'react-native';
import { Input, Button, Or, SocialAuthButtons } from '../shared/sharedImport';
import { registerForm } from "../../../utils/authForms";
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const LoginBackground = require('../../../../assets/login.png');

export default function Register() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();


  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Contract');
  };

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
              <Text className="text-2xl text-Title mb-2">Sign Up HabitHUB</Text>
              <Text className="text-lg text-{#1D2220} mb-4" style={{ textAlign: 'center' }}>
                Create an account to continue with us! Sign up using your social account or email
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
                data={registerForm}
                renderItem={({ item }) => (
                  <View className="w-full mt-4 mb-2">
                    <Controller
                      control={control}
                      name={item.placeholder.toLowerCase()}
                      defaultValue=""
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                          placeholder={item.placeholder}
                          secureTextEntry={item.secureTextEntry}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                        />
                      )}
                    />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View>
              <Button title="Register" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
