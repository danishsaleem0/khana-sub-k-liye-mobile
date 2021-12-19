
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {auth,signInWithEmailAndPassword, createUserWithEmailAndPassword, doc, setDoc ,db} from '../configs/Firebase';
export default function Signup({ navigation}) {

  const [username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signup = async () => {
    try {
      let { user } = await createUserWithEmailAndPassword(auth, email, password)
      let userRef = doc(db, 'users',user.uid) 
      await setDoc(userRef, {
        nameOfUser : username,
        email: email,
        password: password,
        userRole: 'needy',
        UID: user.uid
      })
      navigation.navigate('Home');
     console.log(user);
    }catch (e) {
     Alert.alert(e)
    }

  } 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={ require ('../../images/logo.png') } style={{width: 150, height: 100}} />
      <View style={{backgroundColor: '',alignItems: 'center', marginBottom: 0 }} >
        <Text style={{ fontSize:35, padding : 10, }} >Signup</Text>

        <TextInput
          label="User-Name"
          value={username}
          style={{ width: 300 }}
          onChangeText={text => setUsername(text)}
        />
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

      <TouchableOpacity  >
        <Text style={{ color: 'blue', marginBottom: 10, marginTop: 10 }} >Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: 'blue' }} onPress={()=> {navigation.navigate('Login')}} >If You Have an Account so Login</Text>
      </TouchableOpacity>
      <Button style={{marginVertical:20,backgroundColor: 'green'}} mode="contained" onPress={signup}>
        Sign-up 
      </Button>
    </View>
  );
}
