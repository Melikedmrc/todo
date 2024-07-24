import { Text, View } from 'react-native';
import React, { useState } from 'react';
import BottomTabs from "../component/ui/shared/bottomTabs";
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen({ isLogin }) {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View className="flex-1">
      <View className="items-center justify-start mt-10">
        <Text className="text-2xl mb-5">Calendar</Text>
      </View>
      <View className="flex-1 p-5 -mt-4">
        <View className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#00BFFF', selectedTextColor: 'white', }
            }}
           
          />
        </View>
      </View>
      <View className="absolute bottom-0 w-full">
        <BottomTabs />
      </View>
    </View>
  );
}
