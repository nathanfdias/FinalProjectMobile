import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { DataProvider } from './src/Context/DataContext';
import { CartProvider } from './src/Context/cart';

export default function App() {
  return (
    <CartProvider>
      <DataProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </DataProvider>
    </CartProvider>
  );
}

