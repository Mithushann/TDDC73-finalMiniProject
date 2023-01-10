//react native password strength meter component
//Path: sdk\PassWordStrengthMeter.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PassWordStrengthMeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strength: 0,
            color: ['#f00', '#ff0', '#0f0', '#0ff'], //red, yellow, green, turquise
            strengthText : ['Weak', 'Medium', 'Strong', 'Very Strong'] // default strenth text
        };
    }
    
    // use this lifecycle method to check the strength of the password when the component is updated
    componentDidUpdate(prevProps) {
        //alert(this.state.StrenthCatorgoryText)
        if (prevProps.password !== this.props.password) {
            this.checkStrength(this.props.password);
        }
    }
   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.meter}>
                    <View style={[styles.bar, styles.nonactive, this.state.strength >= 1 ? styles.bar1 : '1']} />
                    <View style={[styles.bar, styles.nonactive, this.state.strength >= 2 ? styles.bar2 : '2']} />
                    <View style={[styles.bar, styles.nonactive, this.state.strength >= 3 ? styles.bar3 : '3']} />
                    <View style={[styles.bar, styles.nonactive, this.state.strength >= 4 ? styles.bar4 : '4']} />
                </View>

                <View style={styles.textView}>
                { this.props.strengthText ?   (this.props.strengthText.map ( (item, index) => {
                    return (
                        index+1  == this.state.strength ? 
                        <Text key={index} style={{ color: this.state.color[index] }}>{item}</Text> :null
                    )
                })): (this.state.strengthText.map ( (item, index) => {
                    return (
                        index+1  == this.state.strength ? 
                        <Text key={index} style={{ color: this.state.color[index] }}>{item}</Text> :null
                    )
                }))
                }
                </View>
            </View>
        );
    }

    checkStrength = (value) => {
        let strength = 0;
        if (value.match(/[a-z]+/)) {
            strength += 1;
        }
        if (value.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (value.match(/[0-9]+/)) {
            strength += 1;
        }
        if (value.length > 8) {
            strength += 1;
        }
        this.setState({ strength });
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    textView: { 
        marginTop: 10,
        justifyContent: 'center', 
        alignItems: 'center',
    },

    meter: {
        width: 200,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden'
    },

    bar: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
    },

    bar1: {
        backgroundColor: '#f00',
    },

    bar2: {
        backgroundColor: '#ff0',
    },

    bar3: {
        backgroundColor: '#0f0',
    },

    bar4: {
        backgroundColor: '#0ff',
    },

    nonactive: {
        backgroundColor: 'gray',
    }
});
