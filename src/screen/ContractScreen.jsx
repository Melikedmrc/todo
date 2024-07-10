


//FLAT LİSTİ KALDIR!!! BUTONU ORTALYINVCA YAZILANLAR EKSİK GÖZÜKÜYOR!

import React from 'react';
import { View, Text, FlatList ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Button, BottomTabs} from "../component/ui/shared/sharedImport";

const contract = require('../../assets/contract.png');


const Data = [
  {
    id: 1,
    emoji: "☀️",
    content: "Plan tasks",
  },
  {
    id: 2,
    emoji: "🎯",
    content: "Set goals",
  },
  {
    id: 3,
    emoji: "🚶🏻",
    content: "Take breaks",
  },
  {
    id: 4,
    emoji: "💪🏻",
    content: "Move and refresh",
  },
  {
    id: 5,
    emoji: "📝",
    content: "Prioritize",
  },
  {
    id: 6,
    emoji: "🔍",
    content: "Break tasks down",
  },
  {
    id: 7,
    emoji: "🚫",
    content: "No multitasking",
  },
  {
    id: 8,
    emoji: "📵",
    content: "Minimize distractions",
  },
  {
    id: 9,
    emoji: "⏰",
    content: "Limit social media",
  },
];

const ContractScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View className="flex-row items-center p-2 border-b border-gray-200 mx-10  ">
      <Text className="text-sm mr-2">{item.emoji}</Text>
      <Text className="text-sm">{item.content}</Text>
    </View>
  );

  return (
    <View className="flex-1">
      <ImageBackground
        source={contract}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
      >
      <View className="flex-1 items-start justify-start my-28">
        <View className="items-start m-8">
          <Text className="text-2xl font-extrabold">Let's make a contract</Text>
        </View>
        <View className="items-start mx-7 my-2">
          <Text className="text-xl font-extrabold">I will</Text>
        </View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      <View>
        <View className="mb-36">
          <Button 
        className="items-center justify-center " 
        title="I Agree" 
        onPress={() => navigation.navigate('Transition')}
       />
        </View>
      
      </View>
      {/* <View>
        <BottomTabs/>
      </View> */}

       </ImageBackground>
    </View>
  );
};

export default ContractScreen;
