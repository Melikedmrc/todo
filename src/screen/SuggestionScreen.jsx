import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo, setSelectedColor } from '../Redux/todosSlice';
import { useNavigation } from '@react-navigation/native';
import BottomTabs from '../component/ui/shared/bottomTabs';
import Button from '../component/ui/shared/button';

const suggestions = [
  {
    title: '🧠  Learn and study more',
    text: 'Stay hungry for knowledge',
    tasks: [
      { text: '📖 Read', color: '#FFB3BA' },
      { text: '🖋️ Study', color: '#FFDFBA' },
    ],
  },
  {
    title: '🏋🏻 Exercise',
    text: 'Become your best version',
    tasks: [
      { text: '🏃🏻 Running', color: '#BAFFC9' },
      { text: '🚴🏻 Cycling', color: '#BAE1FF' },
    ],
  },
  {
    title: '🧹 Clean and Organize',
    text: 'Get your life together',
    tasks: [
      { text: '🪣 Mop the House', color: '#D4A5A5' },
      { text: '🚽 Clean the bathroom', color: '#A5D4D4' },
    ],
  },
];

export default function SuggestionScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddTask = (task) => {
    dispatch(setSelectedColor(task.color));
    dispatch(addTodo({
      id: Date.now().toString(),
      text: task.text,
      color: task.color,
    }));
    navigation.navigate('Todo');
  };

  const handleNewTask = () => {
    navigation.navigate('NewTask');
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex items-center justify-center m-8">
        <Text className="text-xl font-bold">Suggestions</Text>
      </View>

      {suggestions.map((suggestion, index) => (
        <View key={index} className="p-3 items-start">
          <Text className="text-lg font-bold mb-2">{suggestion.title}</Text>
          <Text className="text-xs text-gray-600 mb-1">{suggestion.text}</Text>
          {suggestion.tasks.map((task, taskIndex) => (
            <View
              key={taskIndex}
              className="flex-row items-center justify-center  p-2"
            >
              <View 
                style={{ backgroundColor: task.color, borderRadius: 8, padding: 10, width: '83%', height: 48 }}
                className="justify-center items-start"
              >
                <Text>{task.text}</Text>
              </View>
              <TouchableOpacity
                style={{ backgroundColor: '#ddd', borderRadius: 20, padding: 10, marginLeft: 10, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => handleAddTask(task)}
              >
                <Text className="text-black text-base bottom-1">+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      <View className="flex items-center justify-center mt-4">
        <Button title="Add More" onPress={handleNewTask} />
      </View>

      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={false} />
      </View>
    </View>
  );
}
