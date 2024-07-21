import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, FlatList, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import BottomTabs from '../component/ui/shared/bottomTabs';
import { SuggestionButton } from "../component/ui/shared/button";

const backgroundImage = require('../../assets/todoBackground.png'); 

const getCurrentWeek = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const dayOffset = i - currentDay;
    const date = new Date(today);
    date.setDate(today.getDate() + dayOffset);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayOfMonth = date.getDate();
    weekDays.push({ dayName, dayOfMonth });
  }
  return weekDays;
};

const screenWidth = Dimensions.get('window').width;

export default function TodoScreen() {
  const tasks = useSelector((state) => state.tasks);
  const weekDays = getCurrentWeek();
  const itemWidth = screenWidth / 9;

  return (
    <View className="flex-1 flex-col h-full w-full">
      <View className="bg-purple-300 items-center py-4">
        <Text className="text-lg font-bold text-black text-center mt-6 mb-2">Today</Text>
        <FlatList
          horizontal
          data={weekDays}
          keyExtractor={(item) => item.dayOfMonth.toString()}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 0 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={{ width: itemWidth }} className="items-center bg-fuchsia-200 rounded-xl m-1 py-2">
                <Text className="text-black text-base">{item.dayName}</Text>
                <Text className="text-black text-center mt-1.5 py-1 text-base bg-white h-8 w-8 rounded-3xl">
                  {item.dayOfMonth}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      
        {/* <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center p-4 bg-white m-2 rounded-lg">
              <Text className="text-black">{item}</Text>
            </View>
          )}
        /> */}

<ImageBackground 
      source={backgroundImage} 
      className="items-center justify-center"
      resizeMode='contain'
      style={{ flex: 1 }} // Arka plan resminin View'ı kaplaması için flex: 1 kullanıyoruz
    >
      <View className="flex-1">  

      <View className="flex-row justify-center my-4">
          <TouchableOpacity className="bg-slate-300 px-6 py-2.5  rounded-xl">
            <Text className="text-zinc-400">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-slate-300 px-3 py-2.5 mx-1 rounded-xl">
            <Text className="text-zinc-400">Daily Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-slate-300 px-2 py-2.5  rounded-xl">
            <Text className="text-zinc-400">Study Routine</Text>
          </TouchableOpacity>
        </View>

        <View className="absolute right-4 bottom-20 mb-3 ">
          <SuggestionButton onPress={() => console.log('Button Pressed')} />
        </View>
      </View>
      </ImageBackground>
      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={false} />
      </View>
    </View>
  );
}
