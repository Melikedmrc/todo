import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function Input({ placeholder, secureTextEntry }) {
  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleEndEditing = () => {
    console.log(`${placeholder}: ${text}`);
  };

  return (
    <View className="w-full justify-center items-center">
      <View className="h-16 w-80 bg-Input rounded-xl justify-center p-4">
        <TextInput
          className="h-8 w-full text-l border-b border-Placeholder"
          style={{ lineHeight: 15 }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={handleTextChange}
          onEndEditing={handleEndEditing}
          value={text}
        />
      </View>
    </View>
  );
}
