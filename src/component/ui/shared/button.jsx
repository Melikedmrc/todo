import React , {useState}from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind'; // NativeWind stil sınıfları için

// Genel buton bileşeni
const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-Button w-44 h-11 rounded-lg shadow-xl shadow-slate-800 items-center justify-center ${style}`}
    >
      <Text className={`text-slate-950 text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// Öneri butonu
export const SuggestionButton = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Suggestion')}
      className="bg-white w-12 h-12 rounded-full items-center justify-center"
    >
      
      <Text className="text-black text-xl">+</Text>
    </TouchableOpacity>
  );
};

export const SelectedButton = ({ onPress, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-8 h-8 rounded-2xl bg-gray-200 items-center justify-center mr-3"
    >
      {isSelected && <Feather name="check" size={24} color="black" />}
    </TouchableOpacity>
  );
};


export const RemoveButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-8 w-8 rounded-2xl bg-slate-600 items-center justify-center"
    >
      <EvilIcons name="trash" size={24} color="white" style={{ bottom:2}} />
    </TouchableOpacity>
  );
};
