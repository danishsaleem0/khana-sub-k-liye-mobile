import React, { useContext, useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalContext, GLobalContext } from '../context/context';
import { getDoc, doc,db, onAuthStateChanged, auth } from '../configs/Firebase';
import Login from '../screens/login';
import Signup from '../screens/Signup';
import Home from '../screens/home';
const Stack = createNativeStackNavigator();

export default function Routes() {

  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
   fatchUserunformation(user.uid);
//  dispatch({ type: 'USER_CHECK' })
    
  } else {
    console.log('user does not exits' ) 
   // dispatch({ type: 'USER_NOT_EXIST' })
   }
});
},[])

async function fatchUserunformation(uid) {

  let userRef = doc(db, 'users', uid ) ; 
  let userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    let userInformation = userDoc.data()
   console.log("user-infromation found");
   dispatch( { type: 'AUTH_USER',  payload: userInformation } )
   
  }

  else{
    console.log('no user found')
  }
}

  return (
    <NavigationContainer>
      {
        state.authUser ? 
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitleAlign:'center',
          headerShown: false
      
      }} />
      
       </Stack.Navigator>:
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{
          headerTitleAlign:'center',
      
      }} />
       <Stack.Screen name="Login" component={Login} options={{
          headerTitleAlign:'center',
      
      }} />
      
    </Stack.Navigator> 
      }

      
      
    </NavigationContainer>
  );
}