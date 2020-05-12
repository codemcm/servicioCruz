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
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import IconAnt from 'react-native-vector-icons/AntDesign';

export default function Menu({navigation}) {
  return (
    <ScrollView style={styles.viewDetails}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Button
            title="Clientes"
            onPress={() => navigation.navigate('ClientList')}
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
            title="Sorteos"
            onPress={() => navigation.navigate('DrawList')}
            icon={
              <IconMI
                name="event-available"
                size={15}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons2}
          />
          <Button
            title="Ganador"
            icon={
              <Icon
                name="heart-o"
                size={15}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons1}
          />
        </View>
        <View style={styles.containerRight}>
          <Button
            title="Regalos"
            onPress={() => navigation.navigate('Premio')}
            icon={
              <IconAnt
                name="gift"
                size={15}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons2}
          />
          <Button
            title="Boleto"
            icon={
              <Icon
                name="ticket"
                size={15}
                color="white"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="suert tick ad"
            onPress={() => navigation.navigate('TicketAdd')}
            icon={
              <Icon
                name="magnet"
                size={15}
                style={{marginRight: 10}}
                color="white"
              />
            }
            buttonStyle={styles.buttons2}
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
    marginLeft: 10,
    marginTop: 10,
  },
  containerRight: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  buttons1: {
    marginTop: 2,
    padding: 35,
    marginBottom: 10,
    backgroundColor: '#3D618A',
  },
  buttons2: {
    marginTop: 2,
    marginBottom: 10,
    padding: 35,

    backgroundColor: '#4F7CAF',
  },
});
