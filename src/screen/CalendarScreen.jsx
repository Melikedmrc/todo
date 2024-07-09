import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CalendarScreen({ isLogin }) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{isLogin ? 'Calendar' : 'Not Calendar'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})