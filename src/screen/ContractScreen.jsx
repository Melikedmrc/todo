import { StyleSheet, Button, View } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-native';

export default function ContractScreen({ navigation }) {
  const navigate = useNavigate();

  return (
    <View className="flex-1 items-center justify-center">
      <Button title='transition' onPress={() => navigate('/transition')}>

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})