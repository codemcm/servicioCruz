import React from 'react';
import { Component } from "react";

import { Header } from 'react-native-elements';
class HeaderApp extends Component {

    render(props) {
        return (
            <>

                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </>
        );
    }

};



export default HeaderApp;
