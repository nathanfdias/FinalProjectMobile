import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import Popular from '../../components/Popular';
import HomeHeader from '../../components/HomeHeader';

export default function Home() {
    const navigation = useNavigation();

 return (
   <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <Popular />
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    
})