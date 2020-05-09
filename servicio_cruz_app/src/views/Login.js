import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icond from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
export default function Login({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerView}>
        <Text h4 style={{color: 'orange'}}>
          {' '}
          Servicio cruz
        </Text>
        <View style={{margin: 30}} />
        <Input
          placeholder="Usuario"
          inputStyle={styles.containerInput}
          leftIcon={
            <Icon reverse name="user" type="font-awesome-5" color="#517fa4" />
          }
        />
        <Input
          leftIcon={
            <Icon reverse name="key" type="font-awesome-5" color="#517fa4" />
          }
          placeholder="Contraseña"
          inputStyle={styles.containerInput}
          secureTextEntry={true}
        />

        <Button
          onPress={() => navigation.navigate('My app')}
          buttonStyle={styles.containerButton}
          icon={
            <Icon
              name="check"
              type="font-awesome-5"
              color="white"
              iconStyle={{marginRight: 10}}
            />
          }
          title="Inicio de sesión"
        />
        <Text style={{marginLeft: 10, marginTop: 130, color: 'orange'}}>
          Development by Universe Code
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerView: {
    marginTop: 40,
  },
  containerInput: {
    marginTop: 10,
  },
  containerButton: {
    marginBottom: 5,
    marginTop: 24,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'orange',
  },
});
