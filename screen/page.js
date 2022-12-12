import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground, ScrollView, TouchableOpacity, TextInput } from "react-native";


export default function Page({ navigation }) {
    const [products, setProducts] = useState([
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
    ]);
    const [listProducts, setListProducts] = useState([
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
    ]);
    return (
        <View style={styles.container}>
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
            <View style={styles.product}>
                <ScrollView horizontal={true}>
                    <FlatList
                        horizontal
                        data={products}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => {
                            return <TouchableOpacity
                                onPress={() => navigation.navigate('Detail', { item: item })}
                                style={{
                                    backgroundColor: '#F5F7FA',
                                    borderRadius: 10,
                                    marginRight: 16
                                }}
                            >
                                <Image
                                    style={{
                                        width: 130,
                                        height: 90,
                                    }}
                                    source={item.img} 
                                    />
                                <Text
                                >{item.title}</Text>
                            </TouchableOpacity>
                        }}>
                    </FlatList>
                </ScrollView>
            </View>
            <View style={styles.allProducts}>
                <Text style={styles.titlePro}>All Products</Text>
                <ScrollView>
                    <FlatList
                        numColumns={2}
                        data={listProducts}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => {
                            return <TouchableOpacity style={styles.bgListProducts}
                                onPress={() => navigation.navigate('Detail', { item: item })}
                            >
                                <View style={{
                                    width: 110,
                                    height: 158,
                                    backgroundColor: '#F5F7FA'
                                }}>
                                    <Image
                                        style={{
                                            width: 150,
                                            height: 100,
                                            marginLeft: 20
                                        }}
                                        source={item.img}
                                    />
                                </View>
                                <Text style={styles.proName}>{item.name}</Text>
                                <Text style={styles.proPrice}>${item.price}</Text>
                            </TouchableOpacity>
                        }}>
                    </FlatList>
                </ScrollView>
            </View>
        </View>
    );
    const [text, onChangeText] = React.useState("Find motorcyle, etc");
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }, automaker: {
        flexDirection: "row",
        display: 'flex',
        justifyContent: 'space-between'
    },
    automakeAll: {
        color: "green",
        fontSize: 30
    },
    automakerBrand: {
        fontSize: 20,

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    txtGroup: {
        position: 'absolute',
    },
    text: {
        marginTop: 28,
        marginLeft: 24,
        marginBottom: 6,
        width: 119,
        height: 42,
        fontSize: 18,
        color: '#1987FB',
        fontWeight: '700',
        lineHeight: 21,
        fontFamily: 'Overpass'
    },
    txt: {
        width: 124,
        height: 32,
        marginBottom: 32,
        marginLeft: 23,
        fontSize: 12,
        fontWeight: '300',
        fontFamily: 'Overpass',
        color: 'rgba(9, 15, 71, 0.65)',
    },
    product: {
        flex: 1,
    },

    allProducts: {
        flex: 2,
    },
    titlePro: {
        marginTop: 15,
        marginBottom: 24,
        color: '#090F47',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20
    },
    bgListProducts: {
        flex: 1,
        flexDirection: 'column',
        width: 110,
        height: 158,
        backgroundColor: '#FFFFFF',
        marginRight: 14,
        marginBottom: 16
    },
    proName: {
        marginLeft: 16,
        marginTop: -50,
        width: 110,
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19,
        color: '#090F47'
    },
    proPrice: {
        marginLeft: 16,
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#090F47',
    },
    img: {
        margin: 20
    },

});
