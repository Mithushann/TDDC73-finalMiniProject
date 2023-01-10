import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable, ScrollView, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const DATA = [
    {
        id: 1,
        name: 'Chicken Tikka Masala',
        image: require('./assets/IndianFoodImages/chicken-tikka-masala.jpg'),
        description: 'Tikka masala is a tomato and cream based sauce with lots of traditional Indian spices, including ginger, turmeric and red chili powder, garam masala, coriander and cumin. It is slightly sweet and earthy in flavor.',
        title: 'Chicken Tikka Masala',
        prize: 100
    },
    {
        id: 2,
        name: 'Chicken Biryani',
        image: require('./assets/IndianFoodImages/chicken-biryani.jpg'),
        description: 'Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat (chicken, goat, lamb, prawn, fish, or eggs) and sometimes, in addition, with vegetables or fruits.',
        title: 'Chicken Biry',
        prize: 110
    },
    {
        id: 3,
        name: 'Chicken Korma',
        image: require('./assets/IndianFoodImages/chicken-korma.jpg'),
        description: 'Korma is a rich, creamy curry sauce made with yogurt, cream, and spices. It is a popular dish in Indian, Pakistani, and Bangladeshi cuisine. Korma is often made with chicken, but it can also be made with lamb, beef, or vegetables.',
        title: 'Chicken Korma',
        prize: 120
    },
    {
        id: 4,
        name: 'Chicken Curry',
        image: require('./assets/IndianFoodImages/chicken-curry.jpg'),
        description: 'Chicken curry is a dish of chicken cooked in a spiced sauce or curry powder. It is a common dish in the cuisines of the Indian subcontinent, Southeast Asia, the Caribbean, and the United Kingdom.',
        title: 'Chicken Curry',
        prize: 110
    },
    {
        id: 5,
        name: 'Chicken Vindaloo',
        image: require('./assets/IndianFoodImages/chicken-vindaloo.jpg'),
        description: 'Chicken Vindaloo is made with a red chile paste seasoned with ginger, garlic, red wine vinegar, tamarind, and spices. It is a very hot dish, and is often served with a side of yogurt to cool the palate.',
        title: 'Chicken Vindaloo',
        prize: 120
    },
    {
        id: 6,
        name: 'Chicken Saag',
        image: require('./assets/IndianFoodImages/chicken-saag.jpg'),
        description: 'Chicken Saag is a dish of chicken cooked with spinach and Indian spices. It is a popular dish in Indian, Pakistani, and Bangladeshi cuisine. It is often served with naan bread.',
        title: 'Chicken Saag',
        prize: 110
    },
    {
        id: 7,
        name: 'Chicken Jalfrezi',
        image: require('./assets/IndianFoodImages/chicken-jalfrezi.jpg'),
        description: 'Chicken Jalfrezi is a dish of chicken cooked with onions, peppers, and Indian spices. It is a popular dish in Indian, Pakistani, and Bangladeshi cuisine. It is often served with naan bread.',
        title: 'Chicken Jalf',
        prize: 120
    },
    {
        id: 8,
        name: 'Chicken Katsu Curry',
        image: require('./assets/IndianFoodImages/chicken-katsu-curry.jpg'),
        description: 'Chicken Katsu Curry is a dish of chicken coated in panko breadcrumbs and deep fried, served with curry sauce. It is a popular dish in Japanese cuisine. It is often served with rice.',
        title: 'Chicken Katsu',
        prize: 110
    },
    {
        id: 9,
        name: 'Chicken Madras',
        image: require('./assets/IndianFoodImages/chicken-madras.jpg'),
        description: 'Chicken Madras is a dish of chicken cooked in a spiced sauce. It is a popular dish in Indian, Pakistani, and Bangladeshi cuisine. It is often served with naan bread.',
        title: 'Chicken Madras',
        prize: 120
    },
    {
        id: 10,
        name: 'Chicken Rogan Josh',
        image: require('./assets/IndianFoodImages/chicken-rogan-josh.jpg'),
        description: 'Chicken Rogan Josh is a dish of chicken cooked in a spiced sauce. It is a popular dish in Indian, Pakistani, and Bangladeshi cuisine. It is often served with naan bread.',
        title: 'Chicken Rogan',
        prize: 110
    },
];



const Home = ({ navigation }) => {
    //state for the cart
    const [cart, setCart] = React.useState([]);

    //useEffect to get the cart from async storage
    React.useEffect(() => {
        addToCart(cart);
    }, [cart]);

   

    const Item = ({ name, id, image, description, prize }) => (

        <View style={styles.card}>
            <TouchableOpacity onPress={() => {
                addToCart([...cart, { name, id, image, description, prize }])
                setCart([...cart, { name, id, image, description, prize }])
               
                
            }}>
                <View style={styles.cardName}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.title}> {name} </Text>
                        <Text style={styles.prize}>  Prize {prize} kr </Text>
                    </View>
                    <Image style={styles.image} source={image} />
                </View>
            </TouchableOpacity>
        </View>

    );


    const renderItem = ({ item }) => (
        <Item name={item.name} id={item.id} image={item.image} description={item.description} prize={item.prize} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {/* <Button title="Cart" onPress={() => 
                {addToCart(cart)
                navigation.navigate('cart')}} /> */}

        </SafeAreaView>
    );
}


// async function to add items to the cart in firebase
const addToCart = async (item) => {
    // expo async storage write to cart
    try {
         await AsyncStorage.setItem('@cart', JSON.stringify(item));

    } catch (error) {
        console.log(error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#cfa8b4',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#cfa8b4',
        width: '50%'
    },
    card: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    cardName: {
        flexDirection: 'row',
        backgroundColor: "#b27387",
        width: 330,
        height: 75,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5,
        padding: 20,
        marginHorizontal: 15
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#4a2531",
    },
    name: {
        fontSize: 15,
        color: "black",
    },
    prize: {
        fontSize: 12,
        color: "#4a2531",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 35,
    },
    cartimg: {
        width: 85,
        height: 85,
        borderRadius: 35,
    },
    cardAddToCart: {
        flexDirection: 'row',
        backgroundColor: "#b27387",
        width: 75,
        height: 75,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        padding: 10,
        marginHorizontal: 10
    },
});

export default Home;
