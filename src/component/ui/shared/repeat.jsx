import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRoutine, setSelectedDays, setSelectedCycle } from '../../../Redux/todosSlice';

const getDaysOfWeekStartingFromToday = () => {
  const today = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = [];

  const todayIndex = today.getDay();

  for (let i = 0; i < 7; i++) {
    const dayIndex = (todayIndex + i) % 7;
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dayName = daysOfWeek[dayIndex];
    days.push({ day: dayName, date: date.toISOString().split('T')[0] });
  }

  return days;
};

const Repeat = () => {
  const dispatch = useDispatch();
  const selectedCycle = useSelector((state) => state.todos.selectedCycle);
  const selectedDays = useSelector((state) => state.todos.selectedDays) || [];
  const days = getDaysOfWeekStartingFromToday();

  useEffect(() => {
    if (selectedDays.length === 0) {
      dispatch(setSelectedDays([days[0].day])); // Başlangıç olarak bugünü seç
    }
  }, [dispatch, selectedDays]);

  const handleCycleChange = (cycle) => {
    dispatch(setSelectedCycle(cycle));
    if (cycle === 'Weekly') {
      dispatch(setSelectedDays(days.map(day => day.day))); // Tüm günleri seç
    } else {
      dispatch(setSelectedDays([days[0].day])); // Diğer döngüler için sadece mevcut günü seç
    }
  };

  const handleDayToggle = (day) => {
    const updatedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
      
    dispatch(setSelectedDays(updatedDays));
    
    const dayInfo = days.find(d => d.day === day);
    console.log(`Clicked day: ${day}, Date: ${dayInfo.date}`);
  };

  const handleRoutinePress = (routine) => {
    dispatch(setSelectedRoutine(routine));
    console.log(`${routine} clicked`);

    selectedDays.forEach(day => {
      const dayInfo = days.find(d => d.day === day);
      console.log(`Day: ${day}, Date: ${dayInfo.date}`);
    });
  };

  return (
    <View className="flex-1 h-auto">
      <View className="flex w-96 p-4  bg-slate-50 rounded-lg">
        <Text className="mb-2 pb-1 border-b-0.5 border-custom-border">Set a cycle for your task</Text>
        <View className="flex-row justify-around mb-4 border-b-0.5 border-custom-border">
          {['Daily', 'Weekly', 'Monthly'].map((cycle) => (
            <TouchableOpacity
              key={cycle}
              className={`px-4 py-2 rounded-full mb-2 ${selectedCycle === cycle ? 'bg-Orange' : 'bg-gray-300'}`}
              onPress={() => handleCycleChange(cycle)}
            >
              <Text className="text-base">{cycle}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-around mb-4 -mt-1 border-b-0.5 border-custom-border">
          {days.map(({ day }) => (
            <TouchableOpacity
              key={day}
              className={`w-9 h-9 items-center justify-center p-1 rounded-3xl mb-2 ${selectedDays.includes(day) ? 'bg-Orange' : 'bg-gray-300'}`}
              onPress={() => handleDayToggle(day)}
            >
              <Text className="text-xs">{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-between border-b-0.5 border-custom-border">
          <Text className="text-base mb-2 -mt-2">Repeat</Text>
          <Text className="text-base -mt-2">Every week</Text>
        </View>
      </View>

      <View className="flex w-96 p-4 bg-slate-50 mt-5 rounded-lg">
        <Text className="mb-2 border-b-0.5 border-custom-border">Set a tag for your task</Text>
        <View className="flex-row">
          <TouchableOpacity 
            className="bg-BlueSecond p-2 mr-2 rounded-xl"
            onPress={() => handleRoutinePress('Daily Routine')}
          >
            <Text>Daily Routine +</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-BlueSecond p-2 rounded-xl"
            onPress={() => handleRoutinePress('Study Routine')}
          >
            <Text>Study Routine +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Repeat;
