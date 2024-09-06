import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteCard = ({ note }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{note.title}</Text>
      <Text>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NoteCard;
