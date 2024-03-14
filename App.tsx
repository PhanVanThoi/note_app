import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

interface Note {
  id: string;
  content: string;
}

const NoteApp: React.FC = () => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  const addNote = () => {
    if (newNote.trim() !== '') {
      const newNoteItem: Note = {
        id: Math.random().toString(),
        content: newNote.trim(),
      };
      setNotes([...notes, newNoteItem]);
      setNewNote('');
    }
  };

  const removeNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    if (editingNoteId === id) {
      setEditingNoteId(null);
    }
  };

  const editNote = (id: string, content: string) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, content } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addNoteContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập ghi chú mới"
          value={newNote}
          onChangeText={setNewNote}
        />
        <Button title="Thêm" onPress={addNote} />
      </View>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            {editingNoteId === item.id ? (
              <TextInput
                style={styles.editInput}
                value={item.content}
                onChangeText={text => editNote(item.id, text)}
                autoFocus
                onBlur={() => setEditingNoteId(null)}
              />
            ) : (
              <>
                <Text>{item.content}</Text>
                <Button title="Sửa" onPress={() => setEditingNoteId(item.id)} />
              </>
            )}
            <Button title="Xóa" onPress={() => removeNote(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  addNoteContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  editInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default NoteApp;