import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import CONFIG from '../config';

export default function ProductFacilityPrivate(props) {
  const deleteProduct = async (id) => {
    console.log(id);
  }

  return (
    <View style={{ padding: 5, margin: 5, flexDirection: 'row', borderWidth: 1, borderColor: '#ddd', borderRadius: 5 }}>
      <View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center', margin: 5 }}>
        <MaterialIcons name='image' size={20} color='#AAA' />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'Title-Font', height: 30, fontSize: 12 }}>{props.title}</Text>
        <Text style={{ fontFamily: 'Title-Font', fontSize: 12 }}>{'$ ' + props.price}</Text>
        <Text style={{ fontFamily: 'Title-Font', color: '#666', fontSize: 10 }}>{props.category}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <MaterialIcons name='delete' size={20} color='#AAA' onPress={() => deleteProduct(props.id)} />
      </View>
    </View >
  );
}