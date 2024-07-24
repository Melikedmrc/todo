import React, { useState } from 'react';
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import BottomTabs from '../component/ui/shared/bottomTabs';
import { SuggestionButton, SelectedButton, RemoveButton } from "../component/ui/shared/button";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Redux/todosSlice";

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
  const todos = useSelector((state) => state.todos.todos);
  const weekDays = getCurrentWeek();
  const itemWidth = screenWidth / 9;
  const dispatch = useDispatch();
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

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

  return (
    <View className="flex-1 flex-col h-full w-full">
      <View className="bg-purple-200 items-center py-4">
        <Text className="text-lg font-bold text-black text-center mt-6 mb-2">Today</Text>
        <FlatList
          horizontal
          data={weekDays}
          keyExtractor={(item) => item.dayOfMonth.toString()}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 0 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={{ width: itemWidth }} className="items-center bg-purple-300 rounded-xl m-1 py-2">
                <Text className="text-black text-base">{item.dayName}</Text>
                <Text className="text-black text-center mt-1.5 py-1 text-base bg-white h-8 w-8 rounded-3xl">
                  {item.dayOfMonth}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center justify-center my-4">
          <TouchableOpacity className="bg-white 0 px-6 rounded-xl h-9 items-center justify-center border-slate-200 border-2">
            <Text className="text-zinc-400">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-3 mx-1 rounded-xl h-9 items-center justify-center border-slate-200 border-2">
            <Text className="text-zinc-400">Daily Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-2  rounded-xl h-9 items-center justify-center border-slate-200 border-2 ">
            <Text className="text-zinc-400">Study Routine</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center p-2 m-2 rounded-lg" style={{ backgroundColor: item.color }}>
              <View className="flex-col">
                <Text
                  className="font-semibold text-black pb-1"
                  style={{
                    textDecorationLine: selectedTodoIds.includes(item.id) ? 'line-through' : 'none',
                    textAlign: 'center' // Metni ortalar
                  }}
                >
                  {item.text.toUpperCase()}
                </Text>

                {item.descripe ? (
                  <View className="flex-row">
                    <Text className="text-center">
                      {item.descripe}
                    </Text>
                  </View>
                ) : null}
              </View>

              <View className="flex-row ">
                <SelectedButton
                  onPress={() => handleButtonPress(item.id)}
                  isSelected={selectedTodoIds.includes(item.id)}
                />
                <RemoveButton title="Remove" onPress={() => handleRemoveTodo(item.id)} />
              </View>

            </View>
          )}
        />
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