import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native'; 

export default function BottomTabs({ isLogin }) {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Calendar')}>
        <Text>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Todo')}>
        <Text>Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
