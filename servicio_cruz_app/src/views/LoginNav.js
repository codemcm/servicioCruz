import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ClientAdd from './clientAdd';
import ClientList from './clientList';
function FeedScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

function ProfileScreen() {
    return <View />;
}

function AccountScreen() {
    return <View />;
}

function SettingsScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to inicio"
                onPress={() => navigation.navigate('Inicio')}
            />
        </View>
    );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cliente" component={ClientAdd} />
            <Tab.Screen name="Ver" component={ClientList} />
            <Tab.Screen name="Config" component={AccountScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={SettingsScreen} />
                <Stack.Screen name="Inicio" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
