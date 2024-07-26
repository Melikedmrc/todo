import React from 'react';
import { View, TextInput } from 'react-native';

export default function Input({ placeholder, secureTextEntry, onChangeText, onBlur, value }) {
  return (
    <View className="w-full justify-center items-center">
      <View className="h-14 w-96 bg-Input rounded-2xl justify-center p-4">
        <TextInput
          className="h-7 w-full text-xs border-b-0.5 border-custom-border"
          style={{ lineHeight: 15 }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText} // 9. onChangeText prop'u ile değer güncelleniyor.
          onBlur={onBlur} // 10. onBlur prop'u ile odak kaybını yönetiyoruz.
          value={value} // 11. value prop'u ile input değerini kontrol ediyoruz.
        />
      </View>
    </View>
  );
}
