//Path: sdk\index.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native';
import PassWordStrengthMeter from './sdk/PassWordStrengthMeter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './loginPage';
import Home from './Home';
import Cart from './Cart';
import useNavigation from '@react-navigation/native';


const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Put in credintials to login"
            component={LoginPage}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => CartButton(navigation),
            })}
            
          />

          <Stack.Screen
            name="cart"
            component={Cart}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

const CartButton = (navigation)=>{

  return (
    <Pressable
      onPress={() => navigation.navigate('cart')}
    >
      <Image
        source={require('./assets/cartimg.png')}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
    </Pressable>
  );
};
