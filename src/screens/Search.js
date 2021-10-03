import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Checkbox, Searchbar, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

import * as Font from 'expo-font';

const products = require('../data/products');

// Components
import Product from '../components/Product';
import CONFIG from '../config';

export default function Search(props) {
  return (
    <View>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EEE', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF', height: 50 }}>
        {props.btnBack}
        <Searchbar style={{ width: '100%', height: 40, flex: 1 }} placeholder='Pesquisar' />
        <MaterialIcons name='filter-list' size={30} onPress={() => { }} />
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
                  btnDetails={<MaterialIcons name='chevron-right' size={30} color={CONFIG.colors.primary} onPress={() => { setProductId(product.id); setActiveScreen(4) }} />}
                  btnFacility={<Button onPress={() => { setActiveScreen(3); setFacilityName(product.facilityName); }}
                    style={{ fontFamily: 'Title-Font', backgroundColor: '#fcfcfc', borderRadius: 25, alignItems: 'flex-start', marginTop: 5, marginBottom: 5 }} icon='storefront'
                    labelStyle={{ color: CONFIG.colors.primary, textTransform: 'capitalize', fontSize: 12 }}
                  >
                    {product.facilityName}
                  </Button>}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}