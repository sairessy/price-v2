import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Checkbox, Searchbar, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const products = require('../data/products');
import CONFIG from '../config';

// Compontents
import Product from '../components/Product';


export default function Facility(props) {
  return (
    <View>
      <View style={{ height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#AAA', alignItems: 'center', backgroundColor: '#FFF' }}>
        {props.btnBack}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
          <MaterialIcons name='phone' size={20} />
          <MaterialIcons name='map' size={20} />
          <Text style={{ fontSize: 14, fontFamily: 'Title-Font', marginLeft: 5 }}>{props.name}</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View>
          {
            products.map(product => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  facility={product.facilityName}
                  category={product.category}
                  btnDetails={props.btnDetails}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}