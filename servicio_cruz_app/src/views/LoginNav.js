import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Login from './Login';
import Menu from './menu';

import RifaAdd from './RifaAdd';
import RaffleList from './raffleList';
import ClientAdd from './clientAdd';
import ClientList from './clientList';
import PrizeAdd from './PrizeAdd';
import Ticket from './Ticket';
import TicketAdd from './TicketAdd';
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
  return (
    <View>
      <Text>config o salir, dificil decision...</Text>
    </View>
  );
}

function Boleto({navigation}) {
  return (
    <View>
      <Text>Boleto...</Text>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to inicio"
        onPress={() => navigation.navigate('My app')}
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
          if (route.name === 'Salir') {
            return <IconAnt name="logout" size={24} color="#1C416C" />;
          } else if (route.name === 'Menu') {
            return <Icon5 name="list" size={25} color="#1C416C" />;
          } else if (route.name === 'Configuration') {
            return <IconAnt name="setting" size={25} color="#1C416C" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1C416C',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Configuration" component={ProfileScreen} />
      <Tab.Screen name="Salir" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="PremioAdd"
          component={PrizeAdd}
          options={{
            title: 'Nuevo premio',
          }}
        />
        <Stack.Screen name="TicketAdd" component={TicketAdd} />
        <Stack.Screen
          name="My app"
          component={HomeTabs}
          options={{
            title: 'Clover Light',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen name="Boleto" component={Ticket} />
        <Stack.Screen
          name="Cliente"
          options={{
            title: 'Cliente nuevo',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={ClientAdd}
        />
        <Stack.Screen
          name="ClientList"
          options={{
            title: 'Clientes',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={ClientList}
        />
        <Stack.Screen name="RifaAdd" component={RifaAdd} />
        <Stack.Screen name="RifaList" component={RaffleList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
