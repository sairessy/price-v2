import React, { useEffect, useState } from 'react';
import { View, ScrollView, Modal, TouchableHighlight } from 'react-native';
import { Button, IconButton, Text, TextInput } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import CONFIG from '../config';
const products = require('../data/products');

// Components
import Product from '../components/Product';
import ProfileData from '../components/ProfileData';
import ProductFacilityPrivate from '../components/ProductFacilityPrivate';
import Add from '../components/Add';

export default function Profile(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = async () => {
    console.log('open');
  }

  useEffect(() => {
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#AAA', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF' }}>
        {props.btnGoToHome}
        <Text style={{ fontSize: 22, fontFamily: 'Title-Font' }}>Perfil</Text>
        <Ionicons name='log-out' size={30} onPress={() => setActiveScreen(2)} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          onPress={() => setActiveTab(0)}
          style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#AAA' }}
          labelStyle={{ color: activeTab == 0 ? CONFIG.colors.primary : '#000' }}
        >
          Dados
        </Button>
        <Button
          onPress={() => setActiveTab(1)}
          style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#AAA' }}
          labelStyle={{ color: activeTab == 1 ? CONFIG.colors.primary : '#000' }}
        >Productos</Button>
      </View>
      <ScrollView style={{ flex: 1, padding: 5, display: activeTab == 0 ? 'flex' : 'none' }}>
        <View>
          <ProfileData />
        </View>

      </ScrollView>

      <ScrollView style={{ flex: 1, padding: 5, display: activeTab == 1 ? 'flex' : 'none' }}>
        {
          products.map(product => {
            return (
              <ProductFacilityPrivate
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                facility={product.facilityName}
                category={product.category}
              />
            )
          })
        }
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpened}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name='chevron-left' size={30} onPress={() => setModalOpened(!modalOpened)} />
          <Text>Cancelar</Text>
        </View>
        <Add />
      </Modal>

      <IconButton icon='plus' size={30} color='#000'
        style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: CONFIG.colors.primary }}
        onPress={() => openModal()}
      />
    </View >
  );
}