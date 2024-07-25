import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from "../component/ui/shared/sharedImport";

const contract = require('../../assets/contract.png');

const Data = [
  { id: 1, emoji: "☀️", content: "Plan tasks" },
  { id: 2, emoji: "🎯", content: "Set goals" },
  { id: 3, emoji: "🚶🏻", content: "Take breaks" },
  { id: 4, emoji: "💪🏻", content: "Move and refresh" },
  { id: 5, emoji: "📝", content: "Prioritize" },
  { id: 6, emoji: "🔍", content: "Break tasks down" },
  { id: 7, emoji: "🚫", content: "No multitasking" },
  { id: 8, emoji: "📵", content: "Minimize distractions" },
  { id: 9, emoji: "⏰", content: "Limit social media" },
];

const ContractScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ImageBackground
        source={contract}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
      >
        <View className="flex-1 w-full px-8 mt-32 justify-center">
          <View className="mb-10">
            <Text className="text-3xl font-extrabold text-left">Let's make a contract</Text>
          </View>
          <View className="mb-4 ">
            <Text className="text-xl font-extrabold text-left">I will</Text>
          </View>
          <View className="flex-1">
            {Data.map((item) => (
              <View key={item.id} className="flex-row items-center mb-2 left-4">
                <Text className="text-2xl">•</Text>
                <Text className="text-lg ml-2">{item.emoji} {item.content}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="mb-48 w-full px-8 items-center justify-center">
          <Button 
            title="I AGREE" 
            onPress={() => navigation.navigate('Transition')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ContractScreen;
