import React from 'react';
import { ImageBackground, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 1. useNavigation hook'unu import ettik.

const transitionBackground = require('../../assets/transition.png');

export default function Transition() {
  const navigation = useNavigation(); // 2. useNavigation hook'unu navigation değişkenine atadık.

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={transitionBackground}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        resizeMode="contain"
      />
      
      <Button 
        title="Geri Dön"
        onPress={() => navigation.navigate('Login')} // 3. navigation.navigate ile geçiş yapıyoruz.
      />
    </View>
  );
}
