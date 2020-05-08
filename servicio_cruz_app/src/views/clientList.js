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
import {client_getAll} from '../api_functions/client_getAll';
import Icon from 'react-native-vector-icons/FontAwesome';

function separator() {
  return <View style={{height: 0, marginTop: 10}} />;
}
function _onLongPressButton(name) {
  alert('Seleccionaste:' + name);
}
export default function App({navigation}) {
  var [clients, setClients] = useState({cliente_1: 4, name: 'bu'});
  function Item({objClient}) {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Boleto', {
              id: objClient.client_id,
              nombre: objClient.name,
            })
          }
          underlayColor="white">
          <View style={styles.item}>
            <Icon
              name="user"
              size={24}
              color="black"
              style={styles.imageClient}
            />
            <Text style={styles.title}>{objClient.client_id}</Text>
            <Text style={styles.title}>{objClient.name}</Text>
            <Text style={styles.title}>{objClient.last_name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
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
          style={styles.flatl}
          data={clients}
          renderItem={({item}) => <Item objClient={item} />}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={separator}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    marginBottom: 2,
  },
  item: {
    padding: 2,
    marginTop: 10,
    marginVertical: 1,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    marginRight: 4,
  },
  imageClient: {
    marginLeft: 5,
    marginRight: 15,
  },
  flatl: {marginTop: 0, backgroundColor: 'white'},
});
