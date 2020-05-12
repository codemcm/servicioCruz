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
import {raffleGetAll} from '../api_functions/raffleGetAll';
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
  const [rifaId, setRifaId] = useState(0);

  function Item({objClient}) {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PremioAdd', {
              id: objClient.raffle_id,
            })
          }
          underlayColor="white">
          <View style={styles.item}>
            <Text style={styles.title}>id: {objClient.raffle_id}</Text>
            <IconE
              name="user"
              size={24}
              color="#296E7F"
              style={styles.imageClient}
            />

            <Text style={styles.title}>{objClient.start_date}</Text>
            <Text style={styles.title}>{objClient.raffle_date}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function handleClick() {
    raffleGetAll().then(function(data) {
      console.log(data.data);
      setClients(data.data);
    });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RifaAdd')}
        underlayColor="white">
        <View style={styles.item}>
          <IconE
            name="user-plus"
            size={24}
            color="orange"
            style={styles.imageClient}
          />
          <Text style={styles.title}>Agregar nueva rifa</Text>
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
        title="listar rifas"
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
