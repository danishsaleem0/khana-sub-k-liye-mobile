import React, { useContext, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity,Alert, Image, Button as Button2, Platform} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import {GlobalContext} from '../context/context';
import { db, doc, setDoc, ref, uploadBytes,  getDownloadURL,storage} from '../configs/Firebase';
import { SafeAreaView } from "react-native-safe-area-context";

 

function Help({ navigation }) {

    
    const { state, dispatch } = useContext(GlobalContext)
    const [checked, setChecked] = React.useState('first');
    
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [ name, setName ] = useState('');
    const [ fatherName, setFatherName ] = useState('');
    const [ cnic, setCnic ] = useState('');
    const [ familyMamber, setFamilyMamber] = useState('');
    const [dob,setdob] = useState('');
    const [meals,setMeals] = useState('')
    const [monthlyIncome,setMonthlyIncome] = useState('');
    const [text, settext] = useState("Upload Your Cnic Image");
    

         //      image ref

// function uploadImageToStorage() {
//   return new Promise( async(resolve,reject) => {
//    const imagesRef = ref(storage, `CnicNo/${image2.data.name}`);
//    await  uploadBytes(imagesRef, image)
//    let url = await  getDownloadURL(imagesRef)
//    resolve(url)
    
//   })
// }




const submit = async () => {
const uid = state.authUser.UID
  
        if (name &&fatherName && cnic && dob && familyMamber && meals  &&  monthlyIncome) {
            const info =    {
              name: name,
              fatherName: fatherName,
              cnicNumber: cnic,
              familyMamber: familyMamber,
              dateOfBirth: dob,
              inCome: monthlyIncome,
              rationType: meals,
              currentUserUid: uid,
              // CnicProfile: imageURL
              
            }
            
            let storageRef = ref(storage, `CnicPic/${image.data.name}`)
            if (image) {
                try {
                    await uploadBytes(storageRef, image)
                    let url = await getDownloadURL(storageRef)
                    info[`Cnicurl`] = url
                    let userRef = doc(db, 'Request-of-foods', uid)
                    await setDoc(userRef, info)
                    navigation.navigate('My-Details');

                }catch (er) {  

                    console.error(er);
                }} } 
}
                //  Image Picking With Two Diffrent Var
                const pickImage = async () => {
                  
                  try {
                      let result = await ImagePicker.launchImageLibraryAsync({
                          mediaTypes: ImagePicker.MediaTypeOptions.All,
                          allowsEditing: true,
                          aspect: [4, 3],
                          quality: 1,
                      });
                   if (!result.cancelled) {
                          const response = await fetch(result.uri)
                          const blob = await response.blob();
                          setImage(blob)
                          settext(blob.data.name)
                          
                      }
                   } catch (er) {
                      console.error(er)
                  }
              };
          

   
//   const pickImage1 = async () => {
//     // No permissions request is necessary for launching the image library
//     try {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });
//         if (!result.cancelled) {
//             const response = await fetch(result.uri)
//             const blob = await response.blob();
//             setImage1(blob)
//             settext(blob.data.name)
            
//         }
//     } catch (er) {
//         console.error(er)
//     }
// };


//                                          Saving into database and submit request
    return (
     <SafeAreaView   style={{ flex: 1, alignItems: "center", justifyContent: 'space-evenly' }}>

        {/* <View style={{ flex: 1,  }} >  */}
        {/* <View  style={{ flex: 1, alignItems: "center", justifyContent: 'space-evenly' }} > */}
        <ScrollView>      
        <Text style={{ fontSize: 25 , fontWeight: 'bold',}} > Enter All The Details Below </Text>   
        <TextInput
          label="Enter Your Name"
          value={name}
          style={{ width: 320 }}
         onChangeText={text => setName(text)}
        />

        
        <TextInput
          label="Fathers-Name"
              value={fatherName}
          style={{ width: 320 }}
         onChangeText={text => setFatherName(text)}
        
        />
        <TextInput
          label="CNIC Number"
          value={cnic}
          style={{ width: 320 }}
         onChangeText={text => setCnic(text)}
         keyboardType = 'numeric'
        />
         <TextInput
          label="Number Of Family Member"
          value={familyMamber}
          style={{ width: 320 }}
           onChangeText={text => setFamilyMamber(text)}
        />

        <TextInput
           
          label="Date Of Birth"
          value={dob}
          style={{ width: 320 }}
          onChangeText={text => setdob(text)}
        />
       
       <TextInput
          label="Enter Monthly Income"
          keyboardType = 'numeric'
          value={monthlyIncome}
          style={{ width: 320 }}
          onChangeText={text => setMonthlyIncome(text)}
        />
           <TextInput
          label="Ration Type Daily or Monthly "
          value={meals}
          style={{ width: 320 }}
          onChangeText={text => setMeals(text)}  />


      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10}} >

      <Button style={{ marginTop: 20 }} mode='contained' onPress={pickImage}>
                  CNIC picture
        </Button>

        
        
      {/* <Button onPress={pickImage1} style={{ backgroundColor: '#ED2553', marginRight: 10}} > <Text style={{ color: 'white'}} >CNIC Picture </Text></Button>
      {image1 && <Image source={{ uri: image1}} style={{ display :'none' }} />} */}

{/* 
      <Button  onPress={pickImage} style={{ backgroundColor: '#ED2553', }} >  <Text style={{ color: 'white'}} >CNIC Picture </Text> </Button>
      {image && <Image source={{ uri: image }} style={{display :'none' }}  />}  */}
       
    </View>
    

        <Button style={{width: 300, padding: 5}}  mode="contained" onPress={submit}>
         submit Application
        </Button>
      

        {/* </View> */}
        {/* </View> */}
        </ScrollView>
        </SafeAreaView> 
    )
}
export default Help;
