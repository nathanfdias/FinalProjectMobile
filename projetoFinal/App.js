import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { CartProvider } from './src/Context/cart';
import NetworkInformation from './src/components/NetworkInformation';

export default function App() {
  return (
    <CartProvider>
        <NavigationContainer>
          <NetworkInformation />
          <Routes />
        </NavigationContainer>
    </CartProvider>
  );
}

