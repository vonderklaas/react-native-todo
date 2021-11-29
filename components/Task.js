import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = ({ text, id, removeTask }) => {
  return (
    <View style={styles.task}>
      <View style={styles.textWrapper}>
        <Text>{text}</Text>
      </View>
      <TouchableOpacity onPress={() => removeTask(id)}>
        <View style={styles.square}></View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '90%',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginLeft: 15,
  },
});

export default Task;
