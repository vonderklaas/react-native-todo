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
    const enteredText = enteredValue.trim();
    if (!enteredText || enteredText.length < 1) {
      Alert.alert('Warning', 'Please, enter a valid task!');
    } else {
      setTasks([
        ...tasks,
        { text: enteredValue, id: getRandomID(), createdDate: getDate() },
      ]);
      setEnteredValue(null);
    }
  };

  const removeTask = (id) => {
    showConfirmDialog(id);
  };

  const showConfirmDialog = (id) => {
    Alert.alert(
      'Are your sure?',
      'Are you sure you want to remove this task?',
      [
        {
          text: 'Yes',
          onPress: () => {
            setTasks([...tasks.filter((task) => task.id !== id)]);
            setEnteredValue(null);
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return (
    <ScrollView style={GlobalStyles.pageContainer}>
      {tasks.map((task) => {
        const { text, id, createdDate } = task;
        return (
          <View key={id}>
            <Task
              text={text}
              id={id}
              createdDate={createdDate}
              removeTask={removeTask}
            />
          </View>
        );
      })}
      <View style={styles.addWrapper}>
        <TextInput
          style={styles.addInput}
          value={enteredValue}
          autoCapitalize='sentences'
          onChangeText={(value) => setEnteredValue(value)}
          autoCorrect={true}
          keyboardType='default'
          returnKeyType='done'
          placeholder='Add task...'
        />
        <TouchableOpacity
          style={styles.addPlusContainer}
          onPress={() => addTask(enteredValue)}
        >
          <Text>Add</Text>
          <View style={styles.addPlus}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addWrapper: {
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  addInput: {
    width: 245,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#e9e1e1',
  },
  addPlusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPlus: {
    width: 25,
    height: 25,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#FFF',
    fontSize: 17,
  },
});

export default TasksScreen;
