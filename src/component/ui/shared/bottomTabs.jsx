import React from 'react';
import { StyleSheet,View,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function BottomTabs({ isLogin }) {
  const navigation = useNavigation();

  return (
    <View className="flex-row w-full  items-center justify-center space-x-16 bottom-0 bg-[#fff6ff] ">
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Calendar')}>
        <MaterialIcons name="calendar-month" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Todo')}>
        <MaterialIcons name="checklist" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles= StyleSheet.create({
  icon:{
    backgroundColor:'#f5f5f5',
    height:45,
    width:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:22.5,
    shadowColor:'#000',
    shadowOffset:{width:0, height: -5},
    shadowOpacity: 0.25, // Gölge opaklığı
    shadowRadius: 3.84, // Gölge yayılma yarıçapı
    elevation:5,
    marginBottom:15,
    marginTop:5
  }
})