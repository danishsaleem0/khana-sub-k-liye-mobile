
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity,Alert, Image} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {auth,signInWithEmailAndPassword, } from '../configs/Firebase';


export default function Login({navigation}) {
const login = async () => {
try{
let { user } = await signInWithEmailAndPassword(auth, email, password)
navigation.navigate('Home');
}catch(e) {
   Alert.alert(e)
}
} 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={ require ('../../images/logo.png') } style={{width: 170, height: 100}} />
      <View style={{backgroundColor: '',alignItems: 'center', marginBottom: 0 }} >
        <Text style={{ fontSize:35, padding : 10, }} >Sign-In</Text>

      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput
          label="Email"
          value={email}
          style={{ width: 300 }}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View>
        <TextInput
          label="Password"
          value= {password}
          style={{ width: 300 }}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity >
        <Text  style={{ color: 'blue', marginBottom: 10, marginTop: 10 }} >Forget Password</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text  style={{ color: 'blue' }}onPress={()=> {navigation.navigate('Signup')}} >If You dont Have an Account so Signup</Text>
      </TouchableOpacity>
      <Button style={{marginVertical:20, backgroundColor: 'green'}} mode="contained" onPress={login}>
        Sign-In 
      </Button>
      
     
      <View>
          
      </View>
      
    </View>
  );
}
