import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo, setSelectedColor } from '../Redux/todosSlice';
import { useNavigation } from '@react-navigation/native';
import BottomTabs from '../component/ui/shared/bottomTabs';
import Button, { AddMore } from '../component/ui/shared/button';

const suggestions = [
  {
    title: '🧠  Learn and study more',
    text: 'Stay hungry for knowledge',
    tasks: [
      { text: '📖 Read', color: '#FFEE93' },
      { text: '🖋️ Study', color: '#ADF7B6' },
    ],
  },
  {
    title: '🏋🏻 Exercise',
    text: 'Become your best version',
    tasks: [
      { text: '🏃🏻 Running', color: '#BDE0FE' },
      { text: '🚴🏻 Cycling', color: '#FFC09F' },
    ],
  },
  {
    title: '🧹 Clean and Organize',
    text: 'Get your life together',
    tasks: [
      { text: '🪣 Mop the House', color: '#FCF5C7' },
      { text: '🚽 Clean the bathroom', color: '#F3C4FB' },
    ],
  },
];


export default function SuggestionScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD formatında tarih
  };

  const handleAddTask = (task) => {
    const currentDate = getCurrentDate();
    dispatch(setSelectedColor(task.color));
    dispatch(addTodo({
      id: Date.now().toString(),
      text: task.text,
      color: task.color,
      date: currentDate, // Günün tarihi ekleniyor
    }));
    navigation.
    navigate('Todo');
  };
  
  const handleNewTask = () => {
    navigation.navigate('NewTask');
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex items-center justify-center mt-12 mb-6">
        <Text className="text-xl font-medium">Suggestions</Text>
      </View>

      {suggestions.map((suggestion, index) => (
        <View key={index} className="p-3 items-start ">
          <Text className="text-lg font-medium mb-0 pl-2">{suggestion.title}</Text>
          <Text className="text-xs font-normal text-black mb-1 pl-2">{suggestion.text}</Text>
          {suggestion.tasks.map((task, taskIndex) => (
            <View
              key={taskIndex}
              className="flex-row items-center justify-center  p-2"
            >
              <View 
                style={{ backgroundColor: task.color }}
                className="justify-center items-start w-80 h-14 rounded-lg p-3"
              >
                {/* , borderRadius: 8, padding: 10, width: '83%', height: 48 */}
                <Text className="text-base">{task.text}</Text>
              </View>
              <TouchableOpacity
              className="flex-row items-center justify-center  my-1 ml-3 rounded-full h-9 w-9"
              style={{ backgroundColor: '#D9D9D9'}}
                onPress={() => handleAddTask(task)}
              >
                <Text className="text-black text-medium text-2xl items-center justify-center">+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      <View className="flex items-center justify-center -mt-2">
        <AddMore title="Add More" onPress={handleNewTask} />
      </View>

      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={false} />
      </View>
    </View>
  );
}
