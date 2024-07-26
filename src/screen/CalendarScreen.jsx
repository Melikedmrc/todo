import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BottomTabs from '../component/ui/shared/bottomTabs';
import { Calendar } from 'react-native-calendars';
import { setSelectedRoutine, setSelectedDays } from "../Redux/todosSlice";

const getDayNameFromDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

export default function CalendarScreen({ isLogin }) {
  const [selectedDate, setSelectedDate] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const selectedRoutine = useSelector((state) => state.todos.selectedRoutine);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedDate) {
      const dayName = getDayNameFromDate(selectedDate);
      const todosForDate = todos.filter(todo => {
        if (selectedRoutine === 'All') {
          return todo.date === selectedDate || (Array.isArray(todo.days) && todo.days.includes(dayName));
        } else {
          return todo.repeat === selectedRoutine && Array.isArray(todo.days) && todo.days.includes(dayName);
        }
      });
      setFilteredTodos(todosForDate);
    } else {
      setFilteredTodos(todos);
    }
  }, [selectedDate, todos, selectedRoutine]);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View className="flex-1 bg-Blue">
      <View className="items-center justify-start mt-10">
        <Text className="text-2xl mb-5 font-medium">Calendar</Text>
      </View>

      {/* Takvim */}
      <View className="flex-1 p-5 -mt-6">
        <View className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#00BFFF', selectedTextColor: 'white' }
            }}
          />
        </View>
      </View>

      {/* Seçilen günün TODO'ları  HATALI DÜZELT */}
      <View className="flex-1 p-5 -mt-36">
        {selectedDate ? (
          <>
            <Text className="text-lg font-bold mb-3">Todos for {selectedDate}</Text>
            <FlatList
              data={filteredTodos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="bg-slate-200 p-4 mb-2 rounded-lg">
                  <Text className="text-lg font-semibold">{item.emoji} {item.text}</Text>
                  {item.descripe ? <Text className="text-gray-600">{item.descripe}</Text> : null}
                </View>
              )}
              ListEmptyComponent={<Text className="text-gray-500 text-center">No todos for this date</Text>}
            />
          </>
        ) : (
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="bg-gray-100 p-4 mb-2 rounded-lg">
                <Text className="text-lg font-semibold">{item.emoji} {item.text}</Text>
                {item.descripe ? <Text className="text-gray-600">{item.descripe}</Text> : null}
              </View>
            )}
          />
        )}
      </View>

      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={isLogin} />
      </View>
    </View>
  );
}
