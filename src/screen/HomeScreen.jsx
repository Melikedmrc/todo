import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Input, Button, Or, SocialAuthButtons } from '../component/ui/shared/sharedImport';

const backgroundImage = require('../../assets/bg.png');

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 64, color: 'black', justifyContent: 'center', alignItems: 'left', top: 100, padding: '60' }}>
            Do your tasks quickly and easy
          </Text>
          <Text style={{ fontSize: 18, alignItems: 'left', top: 95 }}>your tasks, your rules, our support</Text>
        </View>
        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Login" onPress={() => navigate('/login')} />
          <TouchableOpacity onPress={() => navigate('/register')}>
            <Text>Create an account</Text>
          </TouchableOpacity>
          <Or />
          <SocialAuthButtons />
        </View>
      </View>
    </ImageBackground>
  );
}
