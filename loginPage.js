// Description: This file contains the code for the login page of the app

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Pressable } from 'react-native';
import PassWordStrengthMeter from './sdk/PassWordStrengthMeter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Home';

const Stack = createStackNavigator();

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <ImageBackground source={require('./assets/loginpageBackground.png')} resizeMode="cover" blurRadius={3} style={styles.image}>
                <View style={styles.container}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                            placeholder="Enter your username"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                        <PassWordStrengthMeter
                            password={this.state.password}
                            strengthText={['😡', '😐', '😃', '😍']}
                            // strengthText= {['Weak', 'Medium', 'Strong', 'Very Strong']}
                        />
                    </View>

                    <View style={styles.buttonView}>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                this.props.navigation.navigate('Home')
                               
                            }
                            }
                        >
                            <Text style={styles.text}>Login</Text>
                        </Pressable>
                    </View>

                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    input: {
        color: 'white',
        textDecorationColor: 'white',

        height: 40,
        width: 200,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 15,
        placeholderTextColor: 'white',
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },

    button: {
        alignItems: "center",
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 15,
    },
    buttonView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputView: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});
