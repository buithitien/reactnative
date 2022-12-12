import React, { useState } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    FlatList, Image
} from 'react-native';

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getDataUsingSimpleGetCall = () => {
        axios.get('https://61dae0b94593510017aff6d1.mockapi.io/react-native')
            .then((json) => setData(json.data))
            .finally(() => setLoading(false));
    };

    const renderItem = (itemData) => {
        return (
            <View style={styles.containerFlate}>
                <View style={{
                    width: 200,
                    height: 158,
                    backgroundColor: '#F5F7FA'
                }}>
                    <View>
                    <View style={styles.allProduct}>
                        <Image style={styles.img} source={{ uri: itemData.item.productImage }} />
                    </View>
                    <View>
                        <Text style={styles.name}>{itemData.item.productName}</Text>
                        <Text style={styles.price}>${itemData.item.productPrice}</Text>
                    </View>
                    </View>
                </View>
            </View>

        );
    }

    return (
        <View style={styles.container}>
            <FlatList
            numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            {isLoading &&
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={getDataUsingSimpleGetCall}>
                    <Text style={styles.callData}>View our products</Text>
                </TouchableOpacity>
            }

            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    containerFlate: {
    },
    callData: {
        fontSize: 30,
        color: "red"
    },
    allProduct: {
        flexDirection: "row",
        
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '100%',
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    bgListProducts: {
        flex: 1,
        flexDirection: 'column',
        width: 157,
        height: 250,
        backgroundColor: '#FFFFFF',
        marginRight: 14,
        marginBottom: 16
    },
    name: {
        marginLeft: 16,
        marginBottom: 8,
        width: 108,
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19,
        color: '#090F47'
    },
    price: {
        marginLeft: 16,
        marginBottom: 10,
        width: 108,
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19,
        color: '#090F47'
    },
    img: {
        width: 180,
        height: 110,
        
    }
});

export default App;