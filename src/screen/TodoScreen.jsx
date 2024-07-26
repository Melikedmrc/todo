import React, { useState } from 'react';
import { Text, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import BottomTabs from '../component/ui/shared/bottomTabs';
import { SuggestionButton, SelectedButton, RemoveButton } from "../component/ui/shared/button";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setSelectedRoutine, setSelectedDays } from "../Redux/todosSlice";


const todoBackground = require('../../assets/todoBackground.png');

const getCurrentWeek = () => {
  const today = new Date();
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayOfMonth = date.getDate();
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD formatında
    weekDays.push({ dayName, dayOfMonth, date: formattedDate });
  }

  return weekDays;
};

const getDayNameFromDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

const screenWidth = Dimensions.get('window').width;

export default function TodoScreen() {
  const todos = useSelector((state) => state.todos.todos);
  const weekDays = getCurrentWeek();
  const itemWidth = screenWidth / 9;
  const dispatch = useDispatch();
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);
  const [selectedDay, setSelectedDay] = useState(weekDays[0].date); // İlk gün varsayılan olarak seçili
  const [selectedDayName, setSelectedDayName] = useState(getDayNameFromDate(weekDays[0].date)); // Gün adını sakla
  const selectedRoutine = useSelector((state) => state.todos.selectedRoutine);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleButtonPress = (id) => {
    setSelectedTodoIds((prevSelectedTodoIds) =>
      prevSelectedTodoIds.includes(id)
        ? prevSelectedTodoIds.filter(todoId => todoId !== id)
        : [...prevSelectedTodoIds, id]
    );
  };

  const handleDayPress = (date) => {
    const dayName = getDayNameFromDate(date); // Gün adını hesapla
    setSelectedDay(date); // Tarihi güncelle
    setSelectedDayName(dayName); // Gün adını güncelle
    console.log('Selected Day:', dayName); // Gün adını logla
  };

  const filteredTodos = todos.filter(todo => {
    if (selectedRoutine === 'All') {
      return todo.date === selectedDay || (Array.isArray(todo.days) && todo.days.includes(selectedDayName));
    } else {
      return todo.repeat === selectedRoutine && Array.isArray(todo.days) && todo.days.includes(selectedDayName);
    }
  });

  return (
    <View className="flex-1 flex-col h-full w-full">
      <View className="bg-PinkColor items-center py-4">
        <Text className="text-lg font-medium text-black text-center mt-6 mb-2">
          Today
        </Text>
        <FlatList
          horizontal
          data={weekDays}
          keyExtractor={(item) => item.date}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 0 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleDayPress(item.date)}>
              <View style={{ width: itemWidth }} className={`items-center bg-PinkSecond rounded-xl m-1 py-2 ${item.date === selectedDay ? 'bg-Purple' : ''}`}>
                <Text className="text-black text-base">{item.dayName}</Text>
                <Text className="text-black text-center mt-1.5 py-1 text-base bg-White h-8 w-8 rounded-3xl">
                  {item.dayOfMonth}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center justify-center my-4 mb-1">
          <TouchableOpacity
            className={`px-6 rounded-xl h-9 items-center justify-center border-slate-200 border-2 ${selectedRoutine === 'All' ? 'bg-Purple' : 'bg-transparent'}`}
            onPress={() => dispatch(setSelectedRoutine('All'))}
          >
            <Text className={`${selectedRoutine === 'All' ? 'text-black' : 'text-slate-400'} text-center font-medium`}>
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`px-3 mx-1 rounded-xl h-9 items-center justify-center border-slate-200 border-2 ${selectedRoutine === 'Daily Routine' ? 'bg-Purple' : 'bg-transparent'}`}
            onPress={() => dispatch(setSelectedRoutine('Daily Routine'))}
          >
            <Text className={`${selectedRoutine === 'Daily Routine' ? 'text-black' : 'text-slate-400'} text-center font-medium`}>
              Daily Routine
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`px-3 mx-1 rounded-xl h-9 items-center justify-center border-slate-200 border-2 ${selectedRoutine === 'Study Routine' ? 'bg-Purple' : 'bg-transparent'}`}
            onPress={() => dispatch(setSelectedRoutine('Study Routine'))}
          >
            <Text className={`${selectedRoutine === 'Study Routine' ? 'text-black' : 'text-slate-400'} text-center font-medium `}>
              Study Routine
            </Text>
          </TouchableOpacity>
        </View>

        {filteredTodos.length === 0 ? (
          <View className="flex-1 items-center justify-center mb-40">
            <View className="border-b-0.25 border-custom-border pb-4">
              <Image source={todoBackground} style={{ width: 309, height: 312 }} />
            </View>            
            <Text className="text-black font-medium mt-4">Nothing here yet...</Text>
          </View>
        ) : (
          <FlatList
            data={filteredTodos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="flex-row justify-between items-center p-3 mx-4 my-2 h-14 w-96 rounded-lg" style={{ backgroundColor: item.color }}>
                <View className="flex-col">
                  <Text
                    className={`font-semibold text-base text-black pb-1 pl-1 ${selectedTodoIds.includes(item.id) ? 'line-through' : ''}`}
                  >
                    {item.emoji} {item.text}
                  </Text>

                  {item.descripe ? (
                    <View className="flex-row">
                      <Text className="text-center pl-7">
                        {item.descripe}
                      </Text>
                    </View>
                  ) : null}
                </View>

                <View className="flex-row">
                  <SelectedButton
                    onPress={() => handleButtonPress(item.id)}
                    isSelected={selectedTodoIds.includes(item.id)}
                  />
                  <RemoveButton title="Remove" onPress={() => handleRemoveTodo(item.id)} />
                </View>
              </View>
            )}
          />
        )}
        <View className="absolute right-4 bottom-20 mb-3">
          <SuggestionButton onPress={() => console.log('Button Pressed')} />
        </View>
      </View>

      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={false} />
      </View>
    </View>
  );
}
