import React, { useContext, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { GlobalContext } from '../context/context';
import { db,  collection, getDocs,  query, where } from '../configs/Firebase';


function PendingPage() {
    const [ data, setData ] = useState([])
    const { state } = useContext(GlobalContext);
    useEffect(async () => {

        let userRef = collection(db, 'Request-of-foods')
        let q = query(userRef, where('UID' ,'==' ,state.currentSelected.UID ))
        
        const get = await getDocs(q);
        get.forEach((doc) => {
            data.push(doc.data());
        });
 

    },[])
    
    return(
        <View style={{flex: 1, alignItems:'center' ,}} >
            <Text  style={{  fontSize: '40'}} >My Information</Text>
            <View style={{ width: 420, height: 300}} >
              {
                  data.map(({cnicNumber,fatherName,name})=> {
                  return(
                  
                    <View>
                     <Text>Name : {name}
                    </Text>
                    </View>
                      
                  )
                  })
              }
            </View>
        </View>
    
    )
}
export default PendingPage;