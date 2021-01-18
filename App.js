import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dataArr, setDataArr] = useState([]);

  const checkPhoneNumber = inputtxt => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneno.test(inputtxt);
  };

  const saveEntry = () => {
    if (!name.length) {
      Alert.alert('', 'Please enter name');
    } else if (!checkPhoneNumber(mobile)) {
      Alert.alert('', 'Wrong mobile number');
    } else {
      abc();
    }
  };

  const abc = () => {
    let temp = {
      name: name,
      phone: mobile,
    };
    setDataArr(preVal => {
      preVal.push(temp);
      return preVal;
    });

    setName('');
    setMobile('');
  };

  const renderItem = ({item}) => {
    return (
      <View style={{borderWidth: 1, marginVertical: 1, paddingHorizontal: 2}}>
        <Text>name:{item.name}</Text>
        <Text>mobile:{item.phone}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{backgroundColor: 'white', padding: 20, marginTop: 20}}>
      <ScrollView>
        <View>
          <Text>No. of Entries {dataArr.length} </Text>
        </View>
        <FlatList data={dataArr} renderItem={renderItem} />
        <View style={{marginVertical: 20}}>
          <TextInput
            keyboardType="default"
            maxLength={40}
            placeholder="Enter Name"
            placeholderTextColor="black"
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderWidth: 1,
              marginBottom: 20,
            }}
            onChangeText={text => setName(text)}
            value={name}
          />

          <TextInput
            keyboardType="numeric"
            placeholder="Enter Mobile No."
            placeholderTextColor="black"
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderWidth: 1,
              marginVertical: 20,
            }}
            value={mobile}
            maxLength={10}
            onChangeText={text => setMobile(text)}
          />

          <Button title="Submit" color="green" onPress={() => saveEntry()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
