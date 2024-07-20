import React from 'react';
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import BottomTabs from '../component/ui/shared/bottomTabs';

// Haftanın günlerini ve tarihlerini almak için fonksiyon
const getCurrentWeek = () => {
  const today = new Date();
  const currentDay = today.getDay(); // Mevcut günün indeksi (0 = Pazar, 1 = Pazartesi, vb.)
  const weekDays = [];

  // Haftanın başlangıç günü olarak mevcut günün olduğu haftayı alıyoruz
  for (let i = 0; i < 7; i++) {
    const dayOffset = i - currentDay;
    const date = new Date(today);
    date.setDate(today.getDate() + dayOffset);

    // Gün adı ve günün tarihi
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayOfMonth = date.getDate(); // Ayın günü

    weekDays.push({ dayName, dayOfMonth });
  }

  return weekDays;
};

// Ekran genişliğini al
const screenWidth = Dimensions.get('window').width;

export default function TodoScreen() {
  const weekDays = getCurrentWeek();
  const itemWidth = screenWidth / 8; // 7 gün, ekran genişliğine bölünmüş

  return (
    <View className="flex-1 flex-col h-full">
       <View className="bg-purple-300 py-4">
        <Text className="text-lg font-bold text-black text-center mt-6 mb-2">Today</Text>
        <FlatList
          horizontal
          data={weekDays}
          keyExtractor={(item) => item.dayOfMonth.toString()}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 0 }}
          renderItem={({ item }) => (
            <View
              style={{ width: itemWidth }}
              className="items-center p-2 bg-fuchsia-200 rounded-xl mx-1"
            >
              <Text className="text-black text-base">{item.dayName}</Text>
              <Text className="text-black text-center mt-1.5 py-1 text-base bg-white h-8 w-8 rounded-3xl">{item.dayOfMonth}</Text>
            </View>
          )}
        />
      </View>

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


      <View className="absolute bottom-0 w-full">
        <BottomTabs />
      </View>
    </View>
  );
}