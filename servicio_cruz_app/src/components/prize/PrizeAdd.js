import React from 'react';
import {
  View,
  FlatList,
  Text,
  ScrollView,
  StyleSheet,
  Picker,
} from 'react-native';
import {useState} from 'react';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {PricingCard} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Ticket({route, navigation}) {
  var [clients, setClients] = useState({cliente_1: 4, name: 'bu'});
  const [selectedValue, setSelectedValue] = useState('java');
  const {id} = route.params;
  const {nombre} = route.params;
  function handleClick() {
    if (id == '') {
      alert('debe llenar la rifa...');
    } else {
      ticketAdd(
        1, //rifa
        id, //cliente
        1, //user
      ).then(function(response) {
        console.log('resultado: ' + response);
      });
      alert('Rifa registrada');
    }
    console.log('do something...');
    alert('boleto...');
  }

  return (
    <ScrollView>
      <View>
        <Text> id: {id}</Text>
        <Text> nombre: {nombre}</Text>
        <PricingCard
          color="#4f9deb"
          title={nombre}
          price="Boleto"
          info={['Rifa de prueba', 'Vigencia: Mayo']}
          button={{title: 'Registrar', icon: 'flight-takeoff'}}
        />
        <View>
          <Text> REGISTRO DE PREMIO!!</Text>
          <Text style={styles.marginText}>Id de la rifa</Text>
          <Input
            placeholder="Rifa"
            leftIcon={{type: 'font-awesome', name: 'pencil'}}
            value={String(clients.cliente_1)}
            onChangeText={text => this.setState({raffle_id: text})}
          />
          <Text style={styles.marginText}>Cliente</Text>
          <Input
            placeholder="Cliente"
            value={clients.name}
            leftIcon={{type: 'font-awesome', name: 'pencil'}}
            onChangeText={text => this.setState({client_id: text})}
          />
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Button
            onPress={() => handleClick()}
            buttonStyle={{margin: 10, backgroundColor: '#EBD22F'}}
            icon={<Icon name="send-o" size={15} color="white" />}
            title="Registrar"
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  marginButon: {
    margin: 10,
  },
  marginText: {
    marginLeft: 10,
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
