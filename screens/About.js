import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const GlobalStyles = require('../styles/Global');

const AboutScreen = () => {
  return (
    <View style={GlobalStyles.page}>
      <ScrollView style={GlobalStyles.pageWrapper}>
        <Text style={GlobalStyles.pageTitle}>About</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AboutScreen;
