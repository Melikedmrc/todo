import React from 'react';
import { View, TextInput } from 'react-native';

export default function Input({ placeholder}) {
  return (
    <View className="w-full justify-center items-center ">
      <View className="h-16 w-80 bg-Input rounded-xl justify-center p-4">
        <TextInput
          className="h-8 w-full text-l border-b border-Placeholder"
          style={{ lineHeight: 15 }}
          placeholder={placeholder}
          // placeholderTextColor="#PlaceholderColor"
          // onChangeText={onChangeText}
          // value={value}
        />
      </View>
    </View>
  );
}
