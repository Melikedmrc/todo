import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import BottomTabs from "../component/ui/shared/bottomTabs";

export default function ProfileScreen() {
  const handlePress = (section) => {
    // Her bir butona tıklandığında yapılacak işlemler burada tanımlanabilir
    console.log(`${section} pressed`);
  };

  return (
    <View className="flex-1 bg-violet-200">
      <View className="mt-12 items-center justify-center">
        <Text className="text-lg font-semibold">Profile</Text>
        <View className="m-5 p-5 w-full">
          <TouchableOpacity onPress={() => handlePress('Account')}>
            <Text className="text-xl bg-slate-100 p-4 my-2 rounded-xl">Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Notifications')}>
            <Text className="text-xl bg-slate-100 p-4 my-2 rounded-xl">Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Help')}>
            <Text className="text-xl bg-slate-100 p-4 my-2 rounded-xl">Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Storage and Data')}>
            <Text className="text-xl bg-slate-100 p-4 my-2 rounded-xl">Storage and Data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Logout')}>
            <Text className="text-xl bg-slate-100 p-4 my-2 rounded-xl">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="absolute bottom-0 w-full">
        <BottomTabs />
      </View>
    </View>
  );
}
