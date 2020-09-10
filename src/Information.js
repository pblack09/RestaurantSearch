import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Button, Text, Image, Modal } from 'react-native';

const data = require('./restaurants.json').response;

export default function Information() {
  const [modalVisible, setModalVisible] = useState(false);

// FLATLIST DATA AND FORMATTING==================
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          {/* Formatting for price rows */}
          return (
            <View style={styles.row}>
              <Text style={styles.priceRange}>{item.category}</Text>
              <FlatList
                horizontal
                data={item.restaurantList}
                renderItem={({ item }) => {
                  {/* Formatting for each restaurant */ }
                  return (
                    <TouchableOpacity
                      onPress={() => setModalVisible(true)}
                      style={styles.restaurant}>
                      <Image style={styles.image} source={{ uri: item.imageUrl }} />
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.info}>
                        {item.rating} Stars, {item.review} Reviews
                      </Text>
                      <Modal
                        animationType='slide'
                        presentationStyle='overFullScreen'
                        visible={modalVisible}>
                        <Text style={styles.modalTitle}>{item.name}</Text>
                        <Image style={styles.modalImage} source={{ uri: item.imageUrl }} />
                        <Text style={styles.modalDescription}>Enter description here.</Text>
                        <View style={styles.button}>
                          <Button
                            onPress={() => setModalVisible(false)}
                            title="Close" />
                        </View>
                      </Modal>
                    </TouchableOpacity>
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

// STYLE SHEET===================================
const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
  priceRange: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  restaurant: {
    marginVertical: 8,
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
  modalTitle: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
  modalImage: {
    marginTop: 20,
    height: 220,
    width: 440,
    resizeMode: 'cover',
  },
  modalDescription: {
    fontSize: 20,
    margin: 30,
    alignSelf: "center",
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 30,
  },
});
