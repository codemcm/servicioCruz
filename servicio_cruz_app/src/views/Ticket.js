import React from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native';
import {useState} from 'react';
import {PricingCard} from 'react-native-elements';
export default function Ticket({route, navigation}) {
  var [clients, setClients] = useState({cliente_1: 4, name: 'bu'});
  const {id} = route.params;
  const {nombre} = route.params;
  function handleClick() {
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
      </View>
    </ScrollView>
  );
}
