// import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View , Text} from "react-native";
import { CalendarScreen, TodoScreen, ProfileScreen, LoginScreen } from "../../../screen/ScreenImport";
// import { useNavigate } from 'react-router-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  
  // const navigate = useNavigate();
  return (
    // <View>
    //   <View className="w-24 justify-center items-center -top-6">
    //     <TouchableOpacity
    //        onPress={() => navigate('/calendar')}
    //     >
    //       <Text>calendar</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View className="w-24 justify-center items-center -top-6">
    //     <TouchableOpacity onPress={() => navigate('/todo')}>
    //       <Text>todo</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View className="w-24 justify-center items-center -top-6">
    //     <TouchableOpacity onPress={() => navigate('/profile')}>
    //     <Text>profile</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
      <Tab.Navigator initialRouteName="login">
        <Tab.Screen name="login" component={LoginScreen}/>
        <Tab.Screen name="calendar" component={CalendarScreen}/>
        <Tab.Screen name="todo" component={TodoScreen}/>
        <Tab.Screen name="profile" component={ProfileScreen}/>
      </Tab.Navigator>
  );
}
 