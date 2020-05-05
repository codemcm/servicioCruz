import React from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native';
import {useState} from 'react';
import {PricingCard} from 'react-native-elements';
export default function App() {
  var [clients, setClients] = useState({cliente_1: 4, name: 'bu'});

  function handleClick() {
    console.log('do something...');
  }
  return (
    <ScrollView>
      <View>
        <PricingCard
          color="#4f9deb"
          title="Martin Cruz"
          price="1 Boleto"
          info={['Rifa de prueba', 'Vigencia: Mayo']}
          button={{title: 'Registrar', icon: 'flight-takeoff'}}
        />
      </View>
    </ScrollView>
  );
}
