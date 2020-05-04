import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Blink = (props) => {
    var [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
        const toggle = setInterval(() => {
            setIsShowingText(!isShowingText);
        }, 1000);

        return () => clearInterval(toggle);
    })

    if (!isShowingText) {
        return null;
    }

    return <Text>{props.text}</Text>;
}

export default function BlinkApp() {

    return (
        <View style={{ marginTop: 50 }}>
            <Blink text='I love to blink' />
            <Blink text='Yes blinking is so great' />
            <Blink text='Why did they ever take this out of HTML' />
            <Blink text='Look at me look at me look at me' />
        </View>
    );
}
