import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native-elements';
import {client_getAll} from '../api_functions/client_getAll';
import CState from '../components/ComponentState';
import {clientFetch} from '../api_functions/clientFetch';

function Item({objClient}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{objClient.name}</Text>
      <Text>{objClient.last_name}</Text>
    </View>
  );
}

export default function App(props) {
  var [clients, setClients] = useState({cliente_1: 4, name: 'bu'});

  function handleClick() {
    client_getAll().then(function(data) {
      console.log(data.data);
      setClients(data.data);
    });
  }
  return (
    <View>
      <View>
        <Button title="listar clientes" onPress={() => handleClick()} />
      </View>
      <View>
        <FlatList
          data={clients}
          renderItem={({item}) => <Item objClient={item} />}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
