import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const GlobalStyles = require('../styles/Global');

const AboutScreen = () => {
  return (
    <ScrollView style={GlobalStyles.pageContainer}>
      <Text style={styles.paragraph}>
        This is simple Todo application written with help of React Native and
        few other libraries
      </Text>
      <Text style={styles.paragraph}>Version 1.0.1</Text>
      <Text style={styles.paragraph}>
        &copy; Copyright 2021 - Nick Garbalau
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    padding: 20,
  },
});

export default AboutScreen;
