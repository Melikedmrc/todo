import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, FlatList ,SafeAreaView } from 'react-native';
import { Input, Button, Or, SocialAuthButtons} from '../shared/sharedImport';
import  BottomTabs  from "../shared/bottomTabs";
import { loginForm } from '../../../utils/authForms';
import { useForm, Controller } from 'react-hook-form';// 1. React Hook Form'dan gerekli bileşenleri eklendi
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { auth, signInWithEmail } from '../../../firebase/firebaseConfig';

const LoginBackground = require('../../../../assets/login.png');

export default function Login() {
  const { control, handleSubmit } = useForm(); // 2. useForm hook'unu başlatıldı.
  const navigation = useNavigation();
 
  
  const onSubmit = async (data) => {
    try {
      const user = await signInWithEmail(data.email, data.password);
      if (user && user.email) {
        console.log('Kullanıcı e-posta adresi:', user.email);
      } else {
        console.log('Kullanıcı bilgileri mevcut değil.');
      }
      navigation.navigate('Transition');
    } catch (error) {
      console.error('Giriş hatası:', error.message); // Hata mesajını daha ayrıntılı göster
    }
  };

  return (
    <SafeAreaView  className="flex-1">
      <ImageBackground
        source={LoginBackground}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
      >
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} behavior="padding">
          <View className="items-center justify-center w-full px-5">
            <View className="items-center justify-center">
              <Text className="text-2xl font-bold text-Title mb-2">Log in to HabitHUB</Text>
              <Text className="text-lg font-light text-{#1D2220} mb-8" style={{ textAlign: 'center' }}>
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
            <View className="mt-10 mb-19">
              <Button  title="Login" onPress={handleSubmit(onSubmit)} />

               {/* 8. handleSubmit ile form gönderimi kontrol ediliyor. */}
            </View>
          </View>
        </KeyboardAvoidingView>
        <BottomTabs isLogin={true} />
      </ImageBackground>
      
      
    </SafeAreaView>
  );
}
