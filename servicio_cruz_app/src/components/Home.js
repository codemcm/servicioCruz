import React from 'react';
import { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert
} from 'react-native';

import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { clientAdd } from '../api_functions/client_add';
import Icon from 'react-native-vector-icons/FontAwesome';
class Home extends Component {
    state = {
        name: '',
        last_name: '',
        description: '',
        cellular: ''
    }
    handleClick = () => {
        if (this.state.name == '') {
            alert('debe llenar el nombre');
        } else {
            data = clientAdd(this.state.name, this.state.last_name, this.state.cellular, this.state.description);
            console.log("name:" + this.state.name);
            this.setState({
                name: '',
                last_name: '',
                description: '',
                cellular: ''
            })
            alert('Datos enviados:' + data);
        }


    }
    render(props) {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                    >
                        <Header
                            placement="left"
                            leftComponent={{ icon: 'menu', color: '#fff' }}
                            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                            rightComponent={{ icon: 'home', color: '#fff' }}
                        />
                        <View >
                            <Text >Nombre</Text>
                            <Input
                                onChangeText={(text) => this.setState({ name: text })}
                                placeholder='nombre'
                                required={true}
                            />
                            <Text >Apellidos</Text>
                            <Input
                                placeholder='apellidos'
                                onChangeText={(text) => this.setState({ last_name: text })}
                            />
                            <Text >Celular</Text>
                            <Input
                                placeholder='celular'
                                onChangeText={(text) => this.setState({ cellular: text })}
                            />
                            <Text >Notas</Text>
                            <Input
                                placeholder='notas'
                                onChangeText={(text) => this.setState({ description: text })}
                            />
                            <Button
                                title="Registrar cliente"
                                onPress={this.handleClick}
                            />

                            <Button
                                title="Outline button"
                                type="outline"

                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

};



export default Home;
