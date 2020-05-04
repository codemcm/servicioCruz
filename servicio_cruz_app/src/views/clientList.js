import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { client_getAll } from '../api_functions/client_getAll';
import CState from '../components/ComponentState';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function Item({ title }) {
    return (
        <View>
            <Text >{title}</Text>
        </View>
    );
}
function handleClick() {
    var data = client_getAll();
    client_getAll().then(function (response) {
        alert('Datos enviados:' + JSON.stringify(response.data));

    })
}


export default function App(props) {
    return (
        <View >

            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
            <CState></CState>
            <Button
                title="listar clientes"
                onPress={() => handleClick()}
            />
        </View>
    );
}


