import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <Button
          title="Registrar cliente"
          onPress={() => console.log('presiono el boton...')}
        />
        <Button
          title="rifa"
          onPress={() => console.log('presiono el boton...')}
        />
        <Button
          title="Productos"
          onPress={() => console.log('presiono el boton...')}
        />
        <Button
          title="Sorteo"
          onPress={() => console.log('presiono el boton...')}
        />
      </View>
    </ScrollView>
  );
}
