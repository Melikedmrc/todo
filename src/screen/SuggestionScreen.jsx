import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addTodo, removeTodo  } from '../Redux/todosSlice';
import { useNavigation } from '@react-navigation/native';
import BottomTabs from "../component/ui/shared/bottomTabs";
import Button from "../component/ui/shared/button";

const suggestions = [
  {
    title: '🧠  Learn and study more',
    text: 'Stay hungry for knowledge',
    tasks: [
      { text: '📖 Read', color: 'bg-red-200' },
      { text: '🖋️ Study', color: 'bg-blue-200' },
    ],
  },
  {
    title: '🏋🏻 Exercise',
    text: 'Become your best version',
    tasks: [
      { text: '🏃🏻 Running', color: 'bg-green-200' },
      { text: '🚴🏻 Cycling', color: 'bg-yellow-200' },
    ],
  },
  {
    title: '🧹 Clean and Organize',
    text: 'Get your life together',
    tasks: [
      { text: '🪣 Mop the House', color: 'bg-purple-200' },
      { text: '🚽 Clean the bathroom', color: 'bg-pink-200' },
    ],
  },
];

export default function SuggestionScreen() {
  // const dispatch = useDispatch();
  const navigation = useNavigation();

  // const handleAddTask = (task) => {
  //   // dispatch(addTask(task));
  //   // navigation.navigate('Todo');
  // };

  const handleNewTask = () => {
    navigation.navigate('NewTask'); // 'NewTask' adlı ekrana navigasyon yapıyoruz.
  };
 

  return (
    <View className="flex-1">
      <View className="flex items-center justify-center m-8">
        <Text className="text-xl font-bold">Suggestions</Text>
      </View>

      {suggestions.map((suggestion, index) => (
        <View key={index} className="p-3">
          <Text className="text-lg font-bold mb-2">{suggestion.title}</Text>
          <Text className="text-xs font-normal mb-1">{suggestion.text}</Text>
          {suggestion.tasks.map((task, taskIndex) => (
            <View
              key={taskIndex}
              className={`flex-row items-center justify-between mb-1 p-2  `}
            >
              <Text className={`rounded-md text-base w-5/6 h-12 p-3 ${task.color}`}>{task.text}</Text>
              <TouchableOpacity
                className="bg-gray-300 m-2 h-9 w-9 rounded-2xl items-center justify-center"
                // onPress={() => handleAddTask(task)}
              >
                <Text className="text-black text-xl">+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      <View className="flex items-center justify-center -bottom-1">
        <Button title="Add More" onPress={handleNewTask} />
      </View>

      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={false} />
      </View>
    </View>
  );
}
