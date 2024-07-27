import React, { useEffect } from 'react';
import { ImageBackground, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transitionBackground = require('../../assets/transition.png');

export default function Transition() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Todo'); 
    }, 1000); 

    
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
