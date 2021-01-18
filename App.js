
import React,{useState} from 'react';
import {View,Text,SafeAreaView,Button,TextInput} from 'react-native';


export default  function App(){
  const [count,setCount] = useState(0);
  const [name,setName] =useState('');
  const [mobile,setMobile] = useState('')


  const saveEntry = ()=>{
    setCount(count+1);
    setName('');
    setMobile('');

  }
  return (
    <SafeAreaView style={{backgroundColor:'white' ,padding:20,marginTop:20}}>
      <View><Text>No. of Entries {count} </Text></View>
      <View style={{marginVertical:20}}>
        <TextInput
          keyboardType="default"
          maxLength={40}
          placeholder="Enter Name"
          placeholderTextColor="black"
          style ={{paddingVertical:5,paddingHorizontal:10,borderWidth:1,marginVertical:20
          }}
          onChangeText ={(text)=> setName(text)}
          value={name}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Enter Mobile No."
          placeholderTextColor="black"
          style ={{paddingVertical:5,paddingHorizontal:10,borderWidth:1,marginVertical:20
          }}
          value={mobile}
          onChangeText={(text) => setMobile(text)}

        />

        <Button title="Submit"  color="green" onPress={()=> saveEntry()}/>
      </View>
    </SafeAreaView>
  );
}
