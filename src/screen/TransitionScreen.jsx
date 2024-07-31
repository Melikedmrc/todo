import React, { useEffect } from 'react';
import { Animated, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transitionBackground = require('../../assets/transition.png');

export default function Transition() {
  const scaleValue = new Animated.Value(1); // Başlangıç ölçeği
  const navigation = useNavigation();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 2, // Büyütme ölçeği
        duration: 500, // Büyütme süresi
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1.5, // Küçültme ölçeği
        duration: 500, // Küçültme süresi
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.navigate('Todo'); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, [navigation]);

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.Image
        source={transitionBackground}
        style={[animatedStyle]}
        resizeMode="center"
        className="flex-1"
      />
    </View>
  );
}
