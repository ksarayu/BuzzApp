import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class fbPage extends React.Component{
    render(){
        return (
            <View>
                <Image
                source = {require('../assets/images/fbLogo.png')}
                style={{width:200, height: 200, alignSelf : 'center', marginTop : 100}}>
                </Image>

                <Text style={{textAlign: 'center', fontSize: 30, marginTop : 50}}> Facebook page </Text>
            </View>
        );
    }
}