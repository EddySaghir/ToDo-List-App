import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, FlatList, Text, TouchableOpacity } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Buy groceries' },
    { id: '2', text: 'Complete assignment' },
    { id: '3', text: 'Go to the gym' },
  ]);

 
  const addTask = (task) => {
    if (task.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    }
    const newTask = { id: Math.random().toString(), text: task };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

 
  const clearTasks = () => {
    if (tasks.length === 0) {
      Alert.alert('Error', 'No tasks to clear');
      return;
    }
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <ToDoForm addTask={addTask} />
      <TouchableOpacity onPress={clearTasks} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear All Tasks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: { fontSize: 16 },
  deleteButton: {
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
  clearButton: {
    marginTop: 20,
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;


