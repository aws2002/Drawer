import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function Header({ title,navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <Entypo name="menu" size={28} color="black"  onPress={openMenu} style={styles.icon}/>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: -68,
    color: '#fff',
  }
});