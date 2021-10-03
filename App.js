import React, { Profiler, useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Checkbox, Searchbar, Text } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import * as Font from 'expo-font';

const products = require('./src/data/products');

// Components
import Product from './src/components/Product';
import CONFIG from './src/config';

// Screens
import Details from './src/screens/Details';
import Facility from './src/screens/Facility';
import Search from './src/screens/Search';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
import Logo from './src/components/Logo';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const [facilityName, setFacilityName] = useState('');
  const [productId, setProductId] = useState('');

  const [isAuth, setIsAuth] = useState(false);


  const loadFonts = async () => {
    await Font.loadAsync({
      "Title-Font": require('./assets/fonts/Montserrat-Medium.ttf'),
      "Main-Font": require('./assets/fonts/Roboto-Regular.ttf')
    });

    setFontLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (fontLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ display: activeScreen == 0 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <View style={{ height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#AAA', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF' }}>
            <Ionicons name='ios-menu-outline' size={30} onPress={() => setActiveScreen(1)} />
            <Logo />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='log-in' size={30} onPress={() => setActiveScreen(5)} style={{ display: !isAuth ? 'flex' : 'none' }} />
              <MaterialIcons name='storefront' size={30} onPress={() => setActiveScreen(7)} style={{ display: isAuth ? 'flex' : 'none' }} />
              <MaterialIcons name='search' size={30} onPress={() => setActiveScreen(2)} />
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


            <Button mode='contained' style={{ margin: 5, backgroundColor: CONFIG.colors.primary, display: 'none' }}
              labelStyle={{ textTransform: 'capitalize' }}
              onPress={() => { }}
            >
              Mostrar mais
            </Button>
          </ScrollView>
        </View >

        <View style={{ display: activeScreen == 1 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <View style={{ height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EEE', alignItems: 'center' }}>
            <MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />
            <Text style={{ fontSize: 18 }}>Menu</Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
            <Button
              style={{ fontFamily: 'Main-Font', backgroundColor: '#fcfcfc', alignItems: 'flex-start', margin: 5 }}
              labelStyle={{ color: CONFIG.colors.primary, textTransform: 'capitalize', }}
            >
              Meu Perfil
            </Button>
            <Button
              style={{ fontFamily: 'Main-Font', backgroundColor: '#fcfcfc', alignItems: 'flex-start', margin: 5 }}
              labelStyle={{ color: CONFIG.colors.primary, textTransform: 'capitalize', }}
            >
              Home
            </Button>
            <Button
              style={{ fontFamily: 'Main-Font', backgroundColor: '#fcfcfc', alignItems: 'flex-start', margin: 5 }}
              labelStyle={{ color: CONFIG.colors.primary, textTransform: 'capitalize', }}
            >
              Search
            </Button>

            <Checkbox.Item label='Modo escuro'
              labelStyle={{ color: '#777' }} status={darkTheme ? 'checked' : 'unchecked'} onPress={() => setDarkTheme(!darkTheme)} />
          </ScrollView>
        </View >

        <View style={{ display: activeScreen == 2 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <Search
            btnBack={<MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />}
          />
        </View >

        <View style={{ display: activeScreen == 3 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <Facility
            name={facilityName}
            btnBack={<MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />}
            btnDetails={<MaterialIcons name='chevron-right' size={30} color={CONFIG.colors.primary} onPress={() => setActiveScreen(3)} />}
          />
        </View >

        <View style={{ display: activeScreen == 4 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <Details
            id={productId}
            btnBack={<MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />}
          />
        </View >

        <View style={{ display: activeScreen == 5 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <Login
            btnBack={<MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />}
            btnNewAccount={<Button mode='text' style={{ margin: 5 }}
              labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }}
              onPress={() => setActiveScreen(6)}
            >
              Criar nova conta!
            </Button>
            }

            btnGoToProfile={
              <Button
                onPress={() => setActiveScreen(7)}
                mode='contained' style={{ margin: 5, backgroundColor: CONFIG.colors.primary }}
                labelStyle={{ textTransform: 'capitalize' }}
                onPress={() => setActiveScreen(7)}
              >
                Ir ao perfil
              </Button>
            }

          />
        </View >
        <View style={{ display: activeScreen == 6 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <Register
            btnBack={<MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />}
            btnLogin={<Button mode='text' style={{ margin: 5 }}
              labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }}
              onPress={() => setActiveScreen(5)}
            >
              Fazer login!
            </Button>}
          />
        </View >

        <View style={{ display: activeScreen == 7 ? 'flex' : 'none', flex: 1, flex: 1 }}>
          <Profile
            btnGoToHome={<MaterialIcons name='chevron-left' size={30} onPress={() => setActiveScreen(0)} />}
          />
        </View >

      </View >
    );
  } else {
    return null;
  }
}