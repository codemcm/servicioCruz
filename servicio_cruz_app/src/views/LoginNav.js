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
          if (route.name === 'Cliente') {
            return <Icon5 name="user-edit" size={20} color="#45F38B" />;
          } else if (route.name === 'ClientList') {
            return <IconMC name="account-search" size={25} color="#45F38B" />;
          } else if (route.name === 'Salir') {
            return <IconAnt name="logout" size={25} color="#45F38B" />;
          } else if (route.name === 'Menu') {
            return <IconAnt name="menuunfold" size={25} color="#45F38B" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#45F38B',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Menu" component={Menu} />
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
        <Stack.Screen name="Premio" component={PrizeAdd} />
        <Stack.Screen name="TicketAdd" component={TicketAdd} />
        <Stack.Screen
          name="My app"
          component={HomeTabs}
          options={{
            title: 'SERVICIO CRUZ',
            headerStyle: {
              backgroundColor: '#91B79E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen name="Boleto" component={Ticket} />
        <Stack.Screen name="Cliente" component={ClientAdd} />
        <Stack.Screen
          name="ClientList"
          options={{
            title: 'Clientes',
            headerStyle: {
              backgroundColor: '#91B79E',
            },
            headerTintColor: '#fff',
          }}
          component={ClientList}
        />
        <Stack.Screen name="Rifa" component={RifaAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
