import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const products = require('../data/products');

export default function Details(props) {
  const [product, setProduct] = useState({});

  const getDetails = async () => {
    const prod = products.filter((p) => p.id == props.id)[0];
    setProduct(prod);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DDD' }}>
        <View style={{ position: 'absolute', top: 10, left: 0, flexDirection: 'row', alignItems: 'center' }}>
          {props.btnBack}
          <Text>Home</Text>
        </View>
        <MaterialIcons name='image' size={40} color='#AAA' />
      </View>
      <ScrollView style={{ flex: 1, padding: 5 }}>
        <Text>{product.title}</Text>
        <Text>{'$ ' + product.price}</Text>
      </ScrollView>
    </View>
  );
}