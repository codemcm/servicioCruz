import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import {clienListAll} from '../../api_functions/clienListAll';
import IconE from 'react-native-vector-icons/FontAwesome';

function separator() {
  return (
    <View
      style={{
        height: 1,
        marginLeft: 10,
        marginRight: 30,
        backgroundColor: '#DEE4EC',
      }}
    />
  );
}
function _onLongPressButton(name) {
  alert('Seleccionaste:' + name);
}
export default function App({navigation}) {
  var [clients, setClients] = useState({cliente_1: 4, name: 'bu'});
  const [activeb, setActive] = useState(true);

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
            <Text style={styles.title}>C-{objClient.client_id}</Text>
            <IconE
              name="user"
              size={24}
              color="#296E7F"
              style={styles.imageClient}
            />

            <Text style={styles.title}>{objClient.name}</Text>
            <Text style={styles.title}>{objClient.last_name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function handleClick() {
    clienListAll().then(function(data) {
      console.log(data.data);
      setClients(data.data);
    });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cliente')}
        underlayColor="white">
        <View style={styles.item}>
          <IconE
            name="user-plus"
            size={24}
            color="orange"
            style={styles.imageClient}
          />
          <Text style={styles.title}>Agregar cliente nuevo</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        style={styles.flatl}
        data={clients}
        renderItem={({item}) => <Item objClient={item} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={separator}
      />
      <Button
        buttonStyle={styles.containerButton}
        title="listar clientes"
        onPress={() => handleClick()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginBottom: 2,
    backgroundColor: 'white',
  },
  item: {
    padding: 2,
    marginTop: 10,
    marginVertical: 1,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    marginTop: 4,
    marginBottom: 4,
    fontSize: 18,
    marginRight: 4,
  },
  imageClient: {
    marginLeft: 5,
    marginRight: 15,
  },
  containerButton: {
    margin: 5,
  },
  flatl: {marginTop: 0, backgroundColor: 'white'},
});
