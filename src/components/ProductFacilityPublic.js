import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import CONFIG from '../config';

export default function ProductFacilityPublic(props) {
  return (
    <View style={{ padding: 5, margin: 5, flexDirection: 'row', borderWidth: 1, borderColor: '#ddd', borderRadius: 5 }}>
      <View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center', margin: 5 }}>
        <MaterialIcons name='image' size={20} color='#AAA' />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'Title-Font', height: 30, fontSize: 11 }}>{props.title}</Text>
        <Text style={{ fontFamily: 'Title-Font' }}>{'$ ' + props.price}</Text>
        {props.btnFacility}
        <Text style={{ fontFamily: 'Title-Font', color: '#666', fontSize: 10 }}>{props.category}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        {props.btnDetails}
      </View>
    </View >
  );
}