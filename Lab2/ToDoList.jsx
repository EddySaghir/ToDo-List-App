import React from 'react';
import { FlatList, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const ToDoList = ({ tasks, removeTask }) => {
  return (
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
      contentContainerStyle={styles.todoList}
    />
  );
};

const styles = StyleSheet.create({
  todoList: {
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    padding: 6,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ToDoList;

