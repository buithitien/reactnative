import {
    SafeAreaView, View, FlatList, StyleSheet, Text, Image
} from 'react-native'
import React from 'react'

const DATA = [
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

const Item = ({ title, img }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={img} />
        <Text style={styles.title}>{title}</Text>

    </View>
);
const Home = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.img}  />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text>Diabetic Diet</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:80,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 13,
        width:60
    },
});
export default Home;
