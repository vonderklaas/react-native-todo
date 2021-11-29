import React, { useState } from 'react';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
enableScreens();
const Stack = createNativeStackNavigator();

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import TasksScreen from './screens/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ stackAnimation: 'flip' }}>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='AboutScreen'
          component={AboutScreen}
          options={{ title: 'About' }}
        />
        <Stack.Screen name='TasksScreen' options={{ title: 'Tasks' }}>
          {() => <TasksScreen tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
