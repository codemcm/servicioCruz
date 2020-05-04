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
class sobLogin extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        last_name: '',
        description: '',
        cellular: ''
    }
    handleClick = () => {

        var https = require('follow-redirects').https;
        var fs = require('fs');

        var options = {
            'method': 'GET',
            'hostname': '192.168.0.4',
            'port': 50000,
            'path': '/b1s/v1/Currencies',
            'headers': {
                'Cookie': 'B1SESSION=f6d4325c-8dbd-11ea-8000-0cd292aa0f37; ROUTEID=.node1'
            },
            'maxRedirects': 20
        };

        var req = https.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function (chunk) {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function (error) {
                console.error(error);
            });
        });

        req.end();

    }
    render(props) {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                    >
                        <View>
                            <Button
                                title="iniciar"
                                onPress={this.handleClick}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

};



export default sobLogin;
