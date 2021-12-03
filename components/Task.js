import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = ({ text, id, createdDate, removeTask }) => {
  return (
    <View style={styles.task}>
      <View style={styles.textWrapper}>
        <Text>Text: {text}</Text>
        <Text>Date: {createdDate}</Text>
      </View>
      <TouchableOpacity style={styles.delete} onPress={() => removeTask(id)}>
        <Text>Delete</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textWrapper: {
    maxWidth: '75%',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // overflow: 'hidden',
    // flexWrap: 'wrap',
  },
  delete: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 50,
    marginLeft: 10,
  },
  circleText: {
    color: '#FFF',
    fontSize: 17,
  },
});

export default Task;
