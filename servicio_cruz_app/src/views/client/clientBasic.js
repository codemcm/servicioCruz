import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
//fixme: check how to put flatlist on other component...
export default function fListClient(props) {

    return (
        <FlatList
            data={clients}
            renderItem={({ item }) => <Item title={item.name} />}
            keyExtractor={item => item.client_id}
        />
    );
}