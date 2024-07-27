import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BottomTabs from '../component/ui/shared/bottomTabs';
import { Calendar } from 'react-native-calendars';
import { SuggestionButton,SelectedButton, RemoveButton } from "../component/ui/shared/button";
import { removeTodo } from "../Redux/todosSlice";

const getDayNameFromDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

const renderTodoItemWithDate = ({ item, selectedTodoIds, handleButtonPress, handleRemoveTodo }) => (
  <View className="flex-col justify-start items-start h-14 w-full p-3 my-1 rounded-lg bg-custom-blue">
    <View className="flex-row justify-between w-full">
      <Text className="font-semibold text-base text-black pb-0 pl-1">{item.emoji} {item.text}</Text>
      <View className="flex-row">
        <SelectedButton
          onPress={() => handleButtonPress(item.id)}
          isSelected={selectedTodoIds.includes(item.id)}
        />
        <RemoveButton title="Remove" onPress={() => handleRemoveTodo(item.id)} />
      </View>
    </View>
    {/* <Text className="text-sm">{item.date}</Text> */}
    {item.descripe ? <Text className="text-center pl-7">{item.descripe}</Text> : null}
  </View>
);

export default function CalendarScreen({ isLogin }) {
  const [selectedDate, setSelectedDate] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const selectedRoutine = useSelector((state) => state.todos.selectedRoutine);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const dispatch = useDispatch();
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

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

  const handleButtonPress = (id) => {
    setSelectedTodoIds((prevSelectedTodoIds) =>
      prevSelectedTodoIds.includes(id)
        ? prevSelectedTodoIds.filter(todoId => todoId !== id)
        : [...prevSelectedTodoIds, id]
    );
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
              [selectedDate]: { selected: true, marked: true, selectedColor: '#9bcefa', selectedTextColor: 'white' }
            }}
          />
        </View>
      </View>

      {/* Todos Listesi */}
      <View className="flex-1 p-5 -mt-36">
        <FlatList
          data={selectedDate ? filteredTodos : todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(props) => renderTodoItemWithDate({
            ...props,
            selectedTodoIds,
            handleButtonPress,
            handleRemoveTodo
          })}
          ListEmptyComponent={<Text className="text-gray-500 text-center">No todos for this date</Text>}
        />
      </View>
      <View className="absolute right-4 bottom-16 mb-5">
          <SuggestionButton onPress={() => console.log('Button Pressed')} />
        </View>
      <View className="absolute bottom-0 w-full">
        <BottomTabs isLogin={isLogin} />
      </View>
    </View>
  );
}
