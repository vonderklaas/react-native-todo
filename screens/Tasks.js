import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';

import getRandomID from '../utils/getRandomID';
import getDate from '../utils/getDate';

import Task from '../components/Task';

const GlobalStyles = require('../styles/Global');

const TasksScreen = ({ tasks, setTasks }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const addTask = () => {
    if (!enteredValue) {
      Alert.alert('Warning', 'Please, enter a task!');
    } else {
      setTasks([
        ...tasks,
        { text: enteredValue, id: getRandomID(), createdDate: getDate() },
      ]);
      setEnteredValue(null);
    }
  };

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
    setEnteredValue(null);
  };

  return (
    <View style={GlobalStyles.page}>
      <ScrollView style={GlobalStyles.pageWrapper}>
        <Text style={GlobalStyles.pageTitle}>Tasks</Text>
        <View style={styles.items}>
          {tasks.map((task) => {
            const { text, id } = task;
            return (
              <View key={id}>
                <Task text={text} id={id} removeTask={removeTask} />
              </View>
            );
          })}
          <View style={styles.addWrapper}>
            <TextInput
              value={enteredValue}
              onChangeText={(value) => setEnteredValue(value)}
              style={styles.addInput}
              placeholder='Add task'
            />
            <TouchableOpacity onPress={() => addTask()}>
              <View style={styles.addPlus}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
  addWrapper: {
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  addInput: {
    width: 250,
    padding: 15,
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
  },
  addPlus: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
  },
});

export default TasksScreen;
