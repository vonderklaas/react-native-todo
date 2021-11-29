import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const GlobalStyles = require('../styles/Global');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.page}>
      <ScrollView style={GlobalStyles.pageWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('TasksScreen')}>
          <Text style={styles.pageLink}>Tasks [Page]</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
          <Text style={styles.pageLink}>About [Page]</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageLink: {
    fontSize: 24,
    color: '#55BCF6',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default HomeScreen;
