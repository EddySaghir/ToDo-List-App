import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    if (task.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
    } else {
      addTask(task);
      setTask(''); // Clear input field after adding task
    }
  };

  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter task" 
        value={task} 
        onChangeText={setTask} 
        returnKeyType="done" 
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: { 
    flexDirection: 'row', 
    marginBottom: 20, 
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#000', 
    padding: 10, 
    borderRadius: 5, 
    marginRight: 8, 
  },
  addButton: {
    backgroundColor: '#5cb85c', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ToDoForm;

