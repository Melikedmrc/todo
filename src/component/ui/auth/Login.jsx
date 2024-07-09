import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, FlatList } from 'react-native';
import { Input, Button, Or, SocialAuthButtons, BottomTabs} from '../shared/sharedImport';
import { loginForm } from '../../../utils/authForms';
import { useForm, Controller } from 'react-hook-form';// 1. React Hook Form'dan gerekli bileşenleri eklendi
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { signInWithEmailAndPasswordAsync } from '../../../firebase/firebaseLoginAuth';

const LoginBackground = require('../../../../assets/login.png');

export default function Login() {
  const { control, handleSubmit } = useForm(); // 2. useForm hook'unu başlatıldı.
  const navigation = useNavigation();
 
  
  const onSubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPasswordAsync(data.email, data.password);
      console.log('User logged in:', JSON.stringify(user, null, 2));
      navigation.navigate('Transition');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  const isLogin = false;

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
              <Text className="text-2xl text-Title mb-2">Log in to HabitHUB</Text>
              <Text className="text-lg text-{#1D2220} mb-4" style={{ textAlign: 'center' }}>
                Welcome back! Sign in using your social account or email to continue ussss
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
                    <Controller
                      control={control} // 4. Controller bileşeni ile her input kontrol ediliyor.
                      name={item.name}  // Name property is used directly from loginForm
                      defaultValue="" // 6. Varsayılan değeri belirtiliyor.
                      render={({ field: { onChange, onBlur, value } }) => ( // 7. Input bileşenine gerekli prop'lar geçiriliyor.
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
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <View>
              <Button title="Login" onPress={handleSubmit(onSubmit)} />

               {/* 8. handleSubmit ile form gönderimi kontrol ediliyor. */}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <BottomTabs isLogin={isLogin} />
      
    </View>
  );
}
