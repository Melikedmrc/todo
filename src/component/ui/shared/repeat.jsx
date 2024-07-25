import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSelectedRoutine } from "../../../Redux/todosSlice";

const Repeat = () => {
  const [selectedCycle, setSelectedCycle] = useState('Weekly');
  const [selectedDays, setSelectedDays] = useState(['Mon']);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const dispatch = useDispatch();

  const handleCycleChange = (cycle) => {
    setSelectedCycle(cycle);
    if (cycle === 'Weekly') {
      setSelectedDays(daysOfWeek); // Tüm günleri seç
    } else {
      setSelectedDays([]); // Diğer döngüler için günleri sıfırla
    }
  };

  const handleDayToggle = (day) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const handleRoutinePress = (routine) => {
    dispatch(setSelectedRoutine(routine));
    console.log(`${routine} clicked`);
  };

  return (
    <View className="flex-1 h-auto">
      <View className="flex w-96 p-4 bg-slate-50 rounded-lg">
        <Text className="mb-2 border-b-2 border-slate-400">Set a cycle for your task</Text>
        <View className="flex-row justify-around mb-4 border-b-2 border-slate-400">
          {['Daily', 'Weekly', 'Monthly'].map((cycle) => (
            <TouchableOpacity
              key={cycle}
              className={`px-4 py-2 rounded-full mb-2 ${selectedCycle === cycle ? 'bg-orange-300' : 'bg-gray-300'}`}
              onPress={() => handleCycleChange(cycle)}
            >
              <Text className="text-base">{cycle}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-around mb-4 border-b-2 border-slate-400">
          {daysOfWeek.map((day) => (
            <TouchableOpacity
              key={day}
              className={`w-9 h-9 items-center justify-center p-1 rounded-3xl mb-2 ${selectedDays.includes(day) ? 'bg-orange-300' : 'bg-gray-300'}`}
              onPress={() => handleDayToggle(day)}
            >
              <Text className="text-xs">{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-between border-b-2 mb-2 border-slate-400">
          <Text className="text-base mb-2 -mt-2">Repeat</Text>
          <Text className="text-base -mt-2">Every week</Text>
        </View>
      </View>

      <View className="flex w-96 p-4 bg-slate-50 mt-5 rounded-lg">
        <Text className="mb-2 border-b-2 border-slate-400">Set a cycle for your task</Text>
        <View className="flex-row">
          <TouchableOpacity 
            className="bg-blue-300 p-2 mr-2 rounded-xl"
            onPress={() => handleRoutinePress('Daily Routine')}
          >
            <Text>Daily Routine +</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-blue-300 p-2 rounded-xl"
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
