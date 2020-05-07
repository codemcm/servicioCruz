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
import {prizeAdd} from '../api_functions/PrizeAdd';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class PrizeAdd extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    product: '',
    raffleId: '',
    user: 1,
  };
  handleClick = () => {
    if (this.state.product == '') {
      alert('debe llenar el nombre');
    } else {
      prizeAdd(this.state.product, this.state.raffleId, this.state.user).then(
        function(response) {
          console.log('resultado: ' + response);
        },
      );
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
              <Text style={styles.marginText}>Nombre del premio</Text>
              <Input
                placeholder="Nombre del premio"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({product: text})}
              />
              <Text style={styles.marginText}>Rifa</Text>
              <Input
                placeholder="Rifa"
                leftIcon={{type: 'font-awesome', name: 'pencil'}}
                onChangeText={text => this.setState({raffleId: text})}
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

export default PrizeAdd;
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
