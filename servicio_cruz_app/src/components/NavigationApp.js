import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Login from './login/Login';
import Menu from './menu/Menu';
import ClientAdd from './client/clientAdd';
import ClientList from './client/clientList';
import DrawAdd from './draw/DrawAdd';
import DrawList from './draw/DrawList';
import Ticket from './ticket/TicketAdd';
import TicketAdd from './TicketAdd';
import PrizeAdd from './prize/PrizeAdd';

function DummyView() {
  return (
    <View>
      <Text>config o salir, dificil decision...</Text>
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
      <Tab.Screen name="Configuration" component={DummyView} />
      <Tab.Screen name="Salir" component={DummyView} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function NavigationApp() {
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
        <Stack.Screen name="DrawAdd" component={DrawAdd} />
        <Stack.Screen name="DrawList" component={DrawList} />

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
