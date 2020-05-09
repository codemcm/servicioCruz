import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Header} from 'react-native-elements';
import {clientAdd} from '../api_functions/client_add';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: '',
    last_name: '',
    description: '',
    cellular: '',
    user: 1,
  };
  handleClick = () => {
    if (this.state.name == '') {
      alert('debe llenar el nombre');
    } else {
      clientAdd(
        this.state.name,
        this.state.last_name,
        this.state.cellular,
        this.state.description,
        this.state.user,
      ).then(function(response) {
        console.log('resultado: ' + response);
      });
      alert('Cliente registrado');
    }
  };
  render(props) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text style={styles.marginText}>Nombre</Text>
              <Input
                placeholder="Nombre"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({name: text})}
              />
              <Text style={styles.marginText}>Apellidos</Text>
              <Input
                placeholder="Apellidos"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({last_name: text})}
              />
              <Text style={styles.marginText}>Celular</Text>
              <Input
                placeholder="Celular"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({cellular: text})}
              />
              <Text style={styles.marginText}>Notas</Text>
              <Input
                placeholder="Notas"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({description: text})}
              />
              <Button
                onPress={this.handleClick}
                buttonStyle={{margin: 10, backgroundColor: '#EBD22F'}}
                icon={<Icon name="send-o" size={15} color="white" />}
                title="Registrar"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  marginButon: {
    margin: 10,
  },
  marginText: {
    marginLeft: 10,
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
