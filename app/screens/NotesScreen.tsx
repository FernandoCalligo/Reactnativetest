import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import NoteCard from '../components/NoteCard';

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);

  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
      <Button title="Agregar Nota" onPress={() => { /* Lógica para agregar nota */ }} />
    </View>
  );
};

export default NotesScreen;
