import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { signInWithGoogle } from "../../../firebase/firebaseConfig";

export default function SocialAuthButtons() {
    return (
            <View className="flex-row justify-center gap-5">
                <TouchableOpacity >
                    <View>
                        <Image source={require("../../../../assets/icon/facebook.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={signInWithGoogle}>
                    <View>
                        <Image source={require("../../../../assets/icon/google.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Image source={require("../../../../assets/icon/apple.png")} />
                    </View>
                </TouchableOpacity>
            </View>
    )
}
