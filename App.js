import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { HomeScreen, LoginScreen, RegisterScreen, TransitionScreen, ContractScreen } from './src/screen/ScreenImport';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/contract" element={<ContractScreen />} />
        <Route path="/transition" element={<TransitionScreen />} />
      </Routes>
    </NativeRouter>
  );
}
