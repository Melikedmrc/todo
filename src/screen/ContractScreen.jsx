import { StyleSheet, Button, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; 

export default function ContractScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center">
      <Button title='transition'  onPress={() => navigation.navigate('Transition')} >

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})