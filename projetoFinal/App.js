import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { DataProvider } from './src/Context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </DataProvider>
  );
}

