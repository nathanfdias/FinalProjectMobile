import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Popular from '../../components/Popular';
import HomeHeader from '../../components/HomeHeader';

export default function Home() {

 return (
   <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <Popular />
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    
})