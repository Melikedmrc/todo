import { StyleSheet, Button ,View } from 'react-native'
import React from 'react'

export default function ContractScreen({navigation}) {
  return (
    <View>
        <Button title='transition' onPress={() => navigation.navigate('Transition')}>

        </Button>
    </View>
  )
}

const styles = StyleSheet.create({})