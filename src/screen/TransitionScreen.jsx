import React, { useEffect } from 'react';
import { ImageBackground, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transitionBackground = require('../../assets/transition.png');

export default function Transition() {
  const navigation = useNavigation();

  useEffect(() => {
    // 5 saniye bekledikten sonra yönlendirme yap
    const timer = setTimeout(() => {
      navigation.navigate('Todo'); // Ana sayfaya yönlendirme
    }, 1000); // 5 saniye = 5000 ms

    // Cleanup: Eğer bu bileşen çıkarsa, zamanlayıcıyı temizle
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={transitionBackground}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        resizeMode="contain"
      />
    </View>
  );
}
