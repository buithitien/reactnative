
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, } from "react-native";
export default function Product() {
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
  ];
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
  return (
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
  );
}

const styles = StyleSheet.create({
  product: {
    flex: 3,
  },
  allProduct: {
    marginVertical: 10,
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: "#f2f4f6",
    borderRadius: 15,
  },
  imgProduct: {
    height: 100,
  },
  nameProduct: {
    width: 120,
    height: 70,
    padding: 10,
    fontSize: 13,
  },
  priceProduct: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});