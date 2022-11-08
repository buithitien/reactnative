import {
    SafeAreaView, View, FlatList, StyleSheet, Text, Image
} from 'react-native'
import React from 'react'

const Product = [
    {
        id: '1',
        title: 'Sugar Substitute',
        img: require("../assets/image133.png"),
    },
    {
        id: '2',
        title: 'Juices & Vinegars',
        img: require("../assets/image134.png"),

    },
    {
        id: '3',
        title: 'Vitamins Medicines',
        img: require("../assets/image135.png"),

    },
    {
        id: '4',
        title: 'Vitamins Medicines',
        img: require("../assets/image133.png"),

    },
    {
        id: '5',
        title: 'Vitamins Medicines',
        img: require("../assets/image134.png"),

    }
];

const AllProducts = [
    {
        id: "1",
        name: "Accu-check Active Test Strip",
        img: require("../assets/image20.png"),
        price: 112,
    },
    {
        id: "2",
        name: "Omron HEM-8712 BP Monitor",
        img: require("../assets/image21.png"),
        price: 150,
    },
    {
        id: "3",
        name: "Accu-check Active Test Strip",
        img: require("../assets/image22.png"),
        price: 112,
    },
    {
        id: "4",
        name: "Omron HEM-8712 BP Monitor",
        img: require("../assets/image23.png"),
        price: 150,
    },
    {
        id: "3",
        name: "Accu-check Active Test Strip",
        img: require("../assets/image22.png"),
        price: 112,
    },
    {
        id: "4",
        name: "Omron HEM-8712 BP Monitor",
        img: require("../assets/image23.png"),
        price: 150,
    },
];

const Item = ({ title, img }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={img} />
        <Text style={styles.title}>{title}</Text>

    </View>
);
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
const Home = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.img} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text>Diabetic Diet</Text>
            <FlatList
                data={Product}
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
}

const styles = StyleSheet.create({
    container: {
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 13,
        width: 65
    },
    allProduct:{
        marginLeft:20,
    }
    
});
export default Home;
