import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { signInWithGoogle } from "../../../firebase/firebaseConfig";

export default function SocialAuthButtons() {
    return (
        <View className="flex-row justify-center gap-5 mb-8 ">
            {/* Facebook İkonu */}
            <TouchableOpacity>
                <View className="w-9 h-9 items-center justify-center rounded-full bg-white">
                    <FontAwesome5 name="facebook" size={24} color="#1877F2" />
                </View>
            </TouchableOpacity>
            
            {/* Google Resmi */}
            <TouchableOpacity onPress={signInWithGoogle}>
            <View className="w-9 h-9 items-center justify-center rounded-full bg-white">
            <Image source={require("../../../../assets/icon/google.png")} style={{ width: 24, height: 24 }} />
                </View>
            </TouchableOpacity>

            {/* GitHub İkonu */}
            <TouchableOpacity>
            <View className="w-9 h-9 items-center justify-center rounded-full bg-white">
            <AntDesign name="github" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
