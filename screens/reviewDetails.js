import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation,route }) {
  const { title, rating,body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{ rating }</Text>
      <Text>{ body }</Text>
    </View>
  );
}