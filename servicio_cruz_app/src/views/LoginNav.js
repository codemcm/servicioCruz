import * as React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

import ClientAdd from './clientAdd';
import ClientList from './clientList';
import Ticket from './Ticket';
function FeedScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to inicio"
        onPress={() => navigation.navigate('Servicio Cruz')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Cliente') {
            return <Icon5 name="user-edit" size={20} color="#45F38B" />;
          } else if (route.name === 'Ver') {
            return <IconMC name="account-search" size={25} color="#45F38B" />;
          } else if (route.name === 'Salir') {
            return <IconAnt name="logout" size={25} color="#45F38B" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#45F38B',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Cliente" component={ClientAdd} />
      <Tab.Screen name="Ver" component={ClientList} />
      <Tab.Screen name="Salir" component={Ticket} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SettingsScreen} />
        <Stack.Screen name="Servicio Cruz" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
