import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function BottomTabs({ isLogin }) {
  const navigation = useNavigation();
  const styles = isLogin ? loginBottom : publicBottom;

  return (
    <View style={styles.container} className="flex-row w-full items-center justify-center space-x-16 bottom-0 h-auto pt-2 shadow-black shadow-2xl">
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

export const loginBottom = StyleSheet.create({
  icon: {
    backgroundColor: '#f5f5f5',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22.5,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: -10 }, // Gölgenin aşağıya doğru yayılmasını sağlar
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
    marginTop: 5
  }
})

export const publicBottom = StyleSheet.create({
  container: {
    backgroundColor: '#fffffff7',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // shadowColor: '#910000',
    // shadowOffset: { width: 0, height:17 }, // Gölgeyi her yöne yayar
    // shadowOpacity: 0.25, // Gölgenin daha belirgin olmasını sağlar
    // shadowRadius: 18.97, // Yayılma yarıçapını artırır
    // elevation: 23, // Android'de gölgeyi belirginleştirir
  },
  icon: {
    backgroundColor: '#ffffff',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 5
  }
})
