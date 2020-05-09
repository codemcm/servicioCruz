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
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu({navigation}) {
  return (
    <ScrollView style={styles.viewDetails}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Button
            title="Cliente"
            onPress={() => navigation.navigate('Cliente')}
            icon={
              <Icon
                name="address-book"
                size={25}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Rifa"
            onPress={() => navigation.navigate('Rifa')}
            icon={
              <Icon
                name="wpforms"
                size={15}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons2}
            containerStyle={{color: 'black'}}
          />
          <Button
            icon={
              <Icon
                name="diamond"
                size={38}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons1}
          />
        </View>
        <View style={styles.containerRight}>
          <Button
            title="Premios"
            onPress={() => navigation.navigate('Premio')}
            icon={
              <Icon
                name="wpforms"
                size={15}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons2}
          />
          <Button
            title="Sorteo"
            icon={
              <Icon
                name="wpforms"
                size={30}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Boleto add"
            onPress={() => navigation.navigate('TicketAdd')}
            icon={<Icon name="wpforms" size={30} style={{marginRight: 10}} />}
            buttonStyle={styles.buttons1}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewDetails: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
  },
  containerLeft: {
    flex: 1,
    marginLeft: 2,
    marginTop: 10,
  },
  containerRight: {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 10,
  },
  buttons1: {
    marginTop: 2,
    padding: 52,
    backgroundColor: '#8A9075',
  },
  buttons2: {
    marginTop: 2,
    padding: 35,
    marginBottom: 4,
    backgroundColor: '#8AF2A2',
  },
});
