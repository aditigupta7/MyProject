import React,{useState} from 'react';
import {View,Text,SafeAreaView,Button,TextInput,Alert,FlatList,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default  function App(){
  const [name,setName] =useState('');
  const [mobile,setMobile] = useState('');
  const [dataArr,setDataArr]= useState([]);

  const checkPhoneNumber = inputtxt =>{
    var phoneno = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
    return phoneno.test(inputtxt);
  };



  const saveEntry =  () =>{
    if(!name.length){
      Alert.alert("Please Enter Name");
    }
    else if(!checkPhoneNumber(mobile)){
      Alert.alert('Wrong mobile Mobile');
    }
    else{
      abc();
    }

  }

  const abc =()=>{
    let temp={
      name:name,
      phone:mobile,
    };
    setDataArr(preVal =>{
      preVal.push(temp);
      return preVal;
    });
    setName('');
    setMobile('');

  };

  const deleteEntry = (item) =>{
      let temp = dataArr.filter(e => e.name !== item.name);
      setDataArr(temp);
};


  const renderItem =({item})=>{
    return (

      <>

		  <View  style={{justifyContent:'space-between',borderWidth:1,marginVertical:5,paddingHorizontal:2,flexDirection:'row' }}>
              <View>
              <Text>Name:{item.name}</Text>
              <Text>Mobile No: {item.phone}</Text>
              </View>

              <View>
              <TouchableOpacity style={{}} onPress={()=> deleteEntry(item)}>
                  <Entypo name="circle-with-cross" size={20} color="black"/>
              </TouchableOpacity>
              </View>


      </View>

      </>



);
    };

  return (
    <SafeAreaView style={{backgroundColor:'white' ,padding:20,marginTop:20}}>
<ScrollView>

      <View><Text>No. of Entries {dataArr.length}</Text></View>

      <FlatList
        data={dataArr}
        renderItem={renderItem}
      />


      <View style={{marginVertical:20}}>
        <TextInput
          keyboardType="default"
          maxLength={40}
          placeholder="Enter Name"
          placeholderTextColor="black"
          style ={style.textInput}
          onChangeText ={(text)=> setName(text)}
          value={name}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Enter Mobile No."
          placeholderTextColor="black"
          style ={style.textInput}
          value={mobile}
          onChangeText={(text) => setMobile(text)}

        />
      <View style={{marginVertical:20}}>
        <Button  title="Submit"  color="green" onPress={()=> saveEntry()}/>
      </View>




      </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  textInput:
  {
    paddingVertical:5,
    paddingHorizontal:10,
    borderWidth:1,
    marginVertical:20
  }
})
