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
import {raffleAdd} from '../api_functions/raffleAdd';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class RifaAdd extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    description: '',
    startDate: '',
    raffleDate: '',
    user: 1,
  };
  handleClick = () => {
    if (this.state.name == '') {
      alert('debe llenar el nombre');
    } else {
      raffleAdd(
        this.state.description,
        this.state.startDate,
        this.state.raffleDate,
        this.state.user,
      ).then(function(response) {
        console.log('resultado: ' + response);
      });
      alert('Rifa registrada');
    }
  };
  render(props) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text style={styles.marginText}>Comienza la rifa</Text>
              <Input
                placeholder="Comienza la rifa"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({startDate: text})}
              />
              <Text style={styles.marginText}>Descripción</Text>
              <Input
                placeholder="Descripción"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({description: text})}
              />
              <Text style={styles.marginText}>Fecha de cierre</Text>
              <Input
                placeholder="Fecha de cierre"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({raffleDate: text})}
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

export default RifaAdd;
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
