import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  BottomTabs   from "../component/ui/shared/bottomTabs";

export default function CalendarScreen({ isLogin }) {
  return (
    <View className="flex-1">
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg">Calendar</Text>
      <View className="absolute bottom-0 w-full" >
        <BottomTabs />
      </View>
      
    </View>
    </View>
  )
}
