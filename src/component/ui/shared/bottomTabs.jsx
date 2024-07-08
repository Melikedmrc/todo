import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function BottomTabs() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#fff' }}>
      <TouchableOpacity>
        <Text>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
