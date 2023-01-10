import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartComp from './sdk/CartComp';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        };
    }

    componentDidMount() {
        // get the data from @storage_Key 
        // if the data is not empty then set the data to the state
        // else set the state to empty string

        AsyncStorage.getItem('@cart').then((value) => {
            if (value !== null) {
                value = JSON.parse(value);
                this.setState({
                    cart: value
                });
            } else {
                this.setState({
                    cart: []
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 8}}>
                    <CartComp cart={this.state.cart} CartType='detailed'/>
                </View>
                <View style={{ flex: 1 }}>
                    {/* clear the cart */}
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            AsyncStorage.removeItem('@cart');
                            this.setState({
                                cart: []
                            });
                        }}
                    >
                        <Text style={styles.text}>Clear Cart</Text>
                    </Pressable>
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        hight: '100',
        backgroundColor: '#cfa8b4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cart: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cartItems: {
        flex: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartItem: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cartItemText: {
        fontSize: 20,
        width: '50%',
        textAlign: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#b27387',
        width: '50%',
        height: 50,
        marginBottom: 10,
        marginTop: 10,
    },
});