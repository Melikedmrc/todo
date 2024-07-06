import React from 'react';
import { Text, View } from 'react-native';

export default function Or() {
  return (
    <View className="flex flex-row items-center justify-center gap-3">
      <View className="border-b border-Placeholder basis-1/3 " />
      <Text>OR</Text>
      <View className="border-b border-Placeholder basis-1/3" />
    </View>
  );
}
