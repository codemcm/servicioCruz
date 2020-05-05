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
  };
  handleClick = () => {
    if (this.state.name == '') {
      alert('debe llenar el nombre');
    } else {
      data = clientAdd(
        this.state.name,
        this.state.last_name,
        this.state.cellular,
        this.state.description,
      );
      console.log('name:' + this.state.name);
      this.setState({
        name: '',
        last_name: '',
        description: '',
        cellular: '',
      });
      alert('Datos enviados:' + data);
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
                placeholder="Comment"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                style={styles}
                onChangeText={text => this.setState({name: text})}
              />
              <Text style={styles.marginText}>Apellidos</Text>
              <Input
                placeholder="apellidos"
                onChangeText={text => this.setState({last_name: text})}
              />
              <Text style={styles.marginText}>Celular</Text>
              <Input
                placeholder="celular"
                onChangeText={text => this.setState({cellular: text})}
              />
              <Text style={styles.marginText}>Notas</Text>
              <Input
                placeholder="notas"
                onChangeText={text => this.setState({description: text})}
              />
              <Button
                onPress={this.handleClick}
                buttonStyle={{margin: 10}}
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
