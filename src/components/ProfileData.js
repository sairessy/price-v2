import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, IconButton, Text, TextInput } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import CONFIG from '../config';



export default function ProfileData() {
  const [email, setEmail] = useState('price@gmail.com');
  const [faciliyName, setFacilityName] = useState('Price Facility');
  const [contact, setContact] = useState('872081978');
  const [facilityCategory, setfacilityCategory] = useState('0');
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  const updateProfile = async () => {
    console.log({ email, faciliyName, contact, facilityCategory, location });
  }

  return (
    <View>
      <TextInput mode='outlined' value={email} label='Introduza o email' onChangeText={((text) => setEmail(text))}
        style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
      />
      <TextInput mode='outlined' value={faciliyName} label='Nome do estabelecimento' onChangeText={((text) => setFacilityName(text))}
        style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
      />
      <TextInput mode='outlined' value={contact} label='Introduza o contacto' onChangeText={((text) => setFacilityContact(text))}
        style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
      />
      <Button mode='contained' style={{ margin: 5, backgroundColor: CONFIG.colors.primary }}
        labelStyle={{ textTransform: 'capitalize' }}
        onPress={() => updateProfile()}
      >
        Actualizar
      </Button>
    </View>
  )

}