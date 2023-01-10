//react native password strength meter component
//Path: sdk\PassWordStrengthMeter.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default class CartComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CartType: 'compact',
            Cart: []

        };
    }

    // set CartType to this.props.CartType if this.props.CartType is not empty
    // else set CartType to 'compact'
    componentDidMount() {
        if (this.props.CartType !== '') {
            this.setState({
                CartType: this.props.CartType
            });
        } else {
            this.setState({
                CartType: 'compact'
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* // is the cart empty */}
                {this.props.cart && this.props.cart.length == 0 ?
                    <Text style={styles.cartText}> Cart is empty </Text>
                    :
                    // if the cart is not empty then map the cart items
                    <ScrollView>

                        {this.props.cart &&

                            this.props.cart.map((item, index) => (

                                <View key={index} style={styles.cartItem}>
                                    {/* // if the cart type is compact then show only the name and prize */}
                                    {this.state.CartType == 'compact' ?
                                        <View style={styles.rowView}>
                                            <Text style={styles.tittle}>{item.name}</Text>
                                            <Text style={styles.prizeText} >{item.prize} kr </Text>
                                        </View>
                                        :
                                        // if the cart type is detailed then show the name, prize and quantity
                                        this.state.CartType == 'detailed' ?
                                            <View style={styles.rowView}>
                                                <Text style={styles.tittle}>{item.name}</Text>
                                                <Text style={styles.prizeText} >{item.prize} kr </Text>
                                                <Image source={item.image} style={styles.detailimg} />

                                            </View>
                                            :
                                            // if the cart type is full then show the name, prize, quantity and total
                                            this.state.CartType == 'full' ?
                                                <View style={{ width: '100%' }}>
                                                    <View style={styles.rowView}>
                                                        <Text style={styles.tittle} >{item.name}</Text>
                                                        <Text style={styles.prizeText} >{item.prize} kr </Text>
                                                    </View>
                                                    <View style={styles.rowView}>
                                                        <Text style={styles.textDescription}>{item.description}</Text>
                                                        <Image style={styles.fullImage} source={item.image} />
                                                    </View>
                                                </View>

                                                :
                                                <Text style={styles.cartText} > Cart Type is not defined </Text>
                                    }
                                </View>
                            ))
                        }
                    </ScrollView>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfa8b4',
    },

    cartText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    prizeText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },

    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        backgroundColor: '#b27387',
        borderRadius: 15,
        elevation: 10,
    },

    textDescription: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'black',
        width: '63%',
    },
    detailimg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fullImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    }
});

