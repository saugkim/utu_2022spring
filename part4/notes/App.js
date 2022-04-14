import * as React from 'react';
import { Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Styles';

const Note = (props) => {
  return (
    <Text style={styles.noteView}>{props.title}</Text>
  )
}

const NoteList = (props) => {
  const [notes, setNotes] = React.useState([])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      const parsed = jsonValue === null ? [] : JSON.parse(jsonValue)
      console.log('parsed in Notelist:', parsed)
      setNotes(parsed)
      return parsed
    } catch(e) {
      console.log('error', e)
    }
  }
  
  getData()

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        { notes.map( note =>
          <Note
            key={note}
            title={note}
          />)}
      </ScrollView>

      <View style={styles.button}>
        <Button 
          color="blue"
          title="Create New Note" 
          onPress={ () => props.navigation.navigate('Create New Note', { notelist: notes}) } />
      </View>
    </View>
  )
}

const Creation = ( {navigation, route} ) => {
  const [note, setNote] = React.useState('')
  const notes = route.params.notelist
  console.log('note list from home screen', notes)

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(value))
    } catch (e) {
      console.log(e)
    }
  }
  
  const createNote = () => {
    const newnote = note
    if ( notes.filter( n => n === note).length === 0 ) {
      const newNotes = notes.concat(newnote)
      storeData(newNotes)
      navigation.navigate('Notes')
    } else {
      Alert.alert(
        'Duplicate warning',
        'Note already in the list', 
        [
          { text: "OK",
            onPress: () => console.log("OK") 
          }
        ]
      )
    }
  }

  return (
    <View>
      <TextInput style={styles.textInput}
        placeholder='Write the note here' 
        onChangeText={ newText => setNote(newText) }
        defaultValue={ note }
      />
        
      <Button
        title="ADD NOTE" 
        onPress={ createNote } 
      />
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={NoteList} />
        <Stack.Screen name="Create New Note" component={Creation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;