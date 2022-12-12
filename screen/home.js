import {
    SafeAreaView, View, FlatList, StyleSheet, Text, Image, TextInput
} from 'react-native'
import React from 'react'

const DATA = [
    {
        id: '1',
        title: 'Wave alpha',
        img: require("../assets/motorbike1.jpg"),
    },
    {
        id: '2',
        title: 'Vision',
        img: require("../assets/motorbike5.jpg"),

    },
    {
        id: '3',
        title: 'Winner X',
        img: require("../assets/motorbike3.jpg"),

    },
    {
        id: '4',
        title: 'Winner',
        img: require("../assets/motorbike4.jpg"),

    },
    {
        id: '5',
        title: 'Wave',
        img: require("../assets/motorbike2.jpg"),

    }
];
const AllProducts = [
    {
        id: "1",
        name: "Wave",
        img: require("../assets/motorbike9.jpg"),
        price: 112,
    },
    {
        id: "2",
        name: "Vision",
        img: require("../assets/motorbike8.jpg"),
        price: 150,
    },
    {
        id: "3",
        name: "Vision",
        img: require("../assets/motorbike3.jpg"),
        price: 112,
    },
    {
        id: "4",
        name: "Vision",
        img: require("../assets/motorbike4.jpg"),
        price: 150,
    },
    {
        id: "3",
        name: "Accu-check Active Test Strip",
        img: require("../assets/motorbike3.jpg"),
        price: 112,
    },
    {
        id: "4",
        name: "Omron HEM-8712 BP Monitor",
        img: require("../assets/motorbike5.jpg"),
        price: 150,
    },
];
//all product
const AllProduct = ({ name, img, price }) => (
    <View style={styles.allProduct}>
        <Image style={styles.imgProduct} source={img} />
        <Text style={styles.nameProduct}>{name}</Text>
        <Text style={styles.priceProduct}>${price}</Text>
    </View>
);
const render = ({ item }) => (
    <AllProduct name={item.name} img={item.img} price={item.price} />
);

//data
const Item = ({ title, img }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={img} />
        <Text style={styles.title}>{title}</Text>
    </View>
);
const Home = () => {

    const renderItem = ({ item, img }) => (
        <Item title={item.title} img={item.img} />
    );

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Image style={styles.map} source={require("../assets/group1194.png")} />
                </View>
                <View>
                    <Image style={styles.imageMoto} source={require("../assets/rectangle1345.png")} />
                    <Text>RENT MOTORBIKE</Text>
                </View>
                <View><Image style={styles.profile} source={require("../assets/utTien.png")} /></View>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>

            <View style={styles.automaker}>
                <Text style={styles.automakeAll}>All</Text>
                <Text style={styles.automakerBrand}>Honda</Text>
                <Text style={styles.automakerBrand}>Yamaha</Text>
                <Text style={styles.automakerBrand}>Suzuki</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
            <View style={styles.product}>
                <Text style={styles.title3}>All Products</Text>
                <SafeAreaView>
                    <FlatList
                        numColumns={2}
                        data={AllProducts}
                        renderItem={render}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>
            </View>

        </SafeAreaView>
        
    );
    const [text, onChangeText] = React.useState("Find motorcyle, etc");


}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: "row",
        display: 'flex',
        justifyContent: 'space-between'
    },
    map: {
        width: 50,
        height: 50,
    },
    imageMoto: {
        width: 100,
        height: 80,
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
    },
    automaker: {
        flexDirection: "row",
        display: 'flex',
        justifyContent: 'space-between'
    },
    automakeAll:{
        color:"green",
        fontSize:30
    },
    automakerBrand:{
        fontSize:20,
        
    },
    image:{
        width:140,
        height:100,
    },
    title:{
        marginLeft:30,
        fontSize: 13,
    },
    imgProduct:{
        width:200,
        height:140,
    }

});
export default Home;
