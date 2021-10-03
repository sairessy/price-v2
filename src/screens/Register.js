import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

import CONFIG from '../config';
import Logo from '../components/Logo';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cPass, setCPass] = useState('');

  const login = async (props) => {
    console.log({ email, pass, cPass });
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        {props.btnBack}
        <Text>Home</Text>
      </View>

      <Logo />

      <View>
        <TextInput mode='outlined' value={email} label='Introduza o email' onChangeText={((text) => setEmail(text))}
          style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
        />

        <TextInput mode='outlined' value={pass} label='Introduza a senha' onChangeText={((text) => setPass(text))}
          style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
        />
        <TextInput mode='outlined' value={cPass} label='Introduza novamente a senha' onChangeText={((text) => setCPass(text))}
          style={{ margin: 5, height: 40, backgroundColor: '#FFF' }}
        />
        <Button mode='contained' style={{ margin: 5, backgroundColor: CONFIG.colors.primary }}
          labelStyle={{ textTransform: 'capitalize' }}
          onPress={() => login()}
        >
          Registar
        </Button>
        {props.btnLogin}
      </View>

    </View >
  );
}