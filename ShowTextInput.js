import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, Button } from 'react-native'
import TextField from './components/TextField'

export default function ShowTextInput() {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Payment details</Text>
      <TextField
        style={styles.textField}
        value={value}
        label="Cardholder name"
        errorText={error}
        onChangeText={(text) => setValue(text)}
      />
      <Button
        title="Set error"
        onPress={() => setError('This field is required.')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 96,
    paddingHorizontal: 36,
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  textField: {
    marginBottom: 32,
  },
})
