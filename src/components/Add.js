import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Checkbox, Searchbar, Text, TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

import * as Font from 'expo-font';

const products = require('../data/products');

// Components
import Product from '../components/Product';
import CONFIG from '../config';

export default function Add(props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('0');
  const [photo, setPhoto] = useState({ pUri: '', pUrl: '', pName: '', pSize: '', pRatio: { w: 1, h: 1 } });
  const [price, setPrice] = useState('');
  const [promotional, setPromotional] = useState(false);
  const [photoUri, setPhotoUri] = useState('');

  const addProduct = async () => {
    console.log({
      title, price, description, time: new Date().getTime(), category,
      promotional, photo
    });
  }

  const displayPhoto = async () => {
    const accepted = ['png', 'jpg', 'jpeg'];

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      const uri = result.uri;
      const response = await fetch(uri);
      const blob = await response.blob();
      const ext = blob.type.split('/')[1];
      if (!accepted.includes(ext)) {
        console.log('A extensão do ficheiro não é suportada!');
      }

      setPhoto({
        pUri: uri, pUrl: '', pName: '', pSize: '', pRatio: { w: 1, h: 1 }
      });
    }
  }

  return (
    <View>
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            displayPhoto()
          }}

          style={{ height: 200, borderBottomWidth: 1, borderBottomColor: '#DDD', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={
              photo.pUri == '' ?
                require('../../assets/img/image.svg') :
                { uri: photo.pUri }
            }
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <TextInput mode='outlined' value={title} label='Titulo' onChangeText={((text) => setTitle(text))}
          style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
        />
        <TextInput mode='outlined' value={title} label='Preço' onChangeText={((text) => setPrice(text))}
          style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
        />


        <TextInput mode='outlined' value={description} label='Descrição' onChangeText={((text) => setDescription(text))}
          style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
        />

        <Checkbox.Item status={promotional ? 'checked' : 'unchecked'} label='Promotional' onPress={() => setPromotional(!promotional)} />
        <Button mode='contained' style={{ margin: 5, backgroundColor: CONFIG.colors.primary }}
          labelStyle={{ textTransform: 'capitalize' }}
          onPress={() => addProduct()}
          icon='plus'
        >
          Adicionar
        </Button>
      </ScrollView>
    </View>
  )
}