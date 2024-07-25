import React from 'react';
import { Text, View } from 'react-native';

export default function Or() {
  return (
    <View className="flex flex-row items-center justify-center gap-3 mb-5">
      <View className="border-b border-gray-400 border-0.25 placeholder: basis-1/3 " />
      <Text className="text-Or font-extrabold text-lg">OR</Text>
      <View className="border-b border-gray-400 border-0.25 basis-1/3" />
    </View>
  );
}
