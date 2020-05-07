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
import {ticketAdd} from '../api_functions/ticketAdd';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class RifaAdd extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    raffle_id: '',
    client_id: '',
    user_id: 1,
  };
  handleClick = () => {
    if (this.state.raffle_id == '') {
      alert('debe llenar la rifa...');
    } else {
      ticketAdd(
        this.state.raffle_id,
        this.state.client_id,
        this.state.user_id,
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
              <Text style={styles.marginText}>Id de la rifa</Text>
              <Input
                placeholder="Rifa"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({raffle_id: text})}
              />
              <Text style={styles.marginText}>Cliente</Text>
              <Input
                placeholder="Cliente"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({client_id: text})}
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
