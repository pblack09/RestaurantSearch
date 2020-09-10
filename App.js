import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';


    // ADD IN JSON FILE INFO
const data = require('./src/restaurants.json').response;

    // MAIN APP
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Search</Text>
      <SearchBar
        platform='ios'
        placeholder="Search"/>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.priceRange}>{item.category}</Text>
              <FlatList
                horizontal
                data={item.restaurantList}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.restaurant}>
                      <Image style={styles.image} source={{uri: item.imageUrl}} />
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.info}>
                        {item.rating} Stars, {item.review} Reviews
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  priceRange: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  restaurant: {
    marginVertical: 10,
    marginRight: 20,
  },
  image: {
    height: 100,
    width: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    color: "gray",
  },
});
