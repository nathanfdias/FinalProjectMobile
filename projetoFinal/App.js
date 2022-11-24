import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { CartProvider } from './src/Context/cart';

export default function App() {
  return (
    <CartProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
    </CartProvider>
  );
}

