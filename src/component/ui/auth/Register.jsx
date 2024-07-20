import React, { useState } from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, FlatList, Alert } from 'react-native';
import { Input, Button, Or, SocialAuthButtons } from '../shared/sharedImport';
import { registerForm } from "../../../utils/authForms";
import { createUserWithEmail } from '../../../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const LoginBackground = require('../../../../assets/login.png');

export default function Register() {
  const [formData, setFormData] = useState({});
  const navigation = useNavigation();

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async () => {
    console.log('Form Verileri:', formData); // Verilerin doğru geldiğinden emin olun

    const email = formData['e-mail'] || ''; // 'e-mail' yerine 'email' kullanılabilir
    const password = formData['password'] || ''; // 'password' için de aynı durum

    if (!email || !password) {
      Alert.alert('Hata', 'E-posta veya şifre boş olamaz.');
      return;
    }

    try {
      const user = await createUserWithEmail(email, password);
      console.log('Kullanıcı oluşturuldu:', user);
      Alert.alert('Başarı', 'Kayıt işlemi başarılı!');
      navigation.navigate('Contract');
    } catch (error) {
      Alert.alert('Hata', 'Kayıt işlemi sırasında bir hata oluştu.');
      console.log('Hata: ', error);
    }
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
                    <Input
                      placeholder={item.placeholder}
                      secureTextEntry={item.secureTextEntry}
                      onChangeText={(value) => handleInputChange(item.placeholder.toLowerCase(), value)}
                      value={formData[item.placeholder.toLowerCase()] || ''}
                    />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View>
              <Button title="Register" onPress={onSubmit} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
