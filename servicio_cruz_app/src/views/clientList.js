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
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem} from 'react-native-elements';
const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];
function Item({objClient}) {
  return (
    <View style={styles.item}>
      <Icon name="user" size={24} color="black" />
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
    <ScrollView>
      <View>
        <Button title="listar clientes" onPress={() => handleClick()} />
        <FlatList
          data={clients}
          renderItem={({item}) => <Item objClient={item} />}
          keyExtractor={item => item.name}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    marginBottom: 2,
  },
  item: {
    padding: 2,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});
