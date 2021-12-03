import React, { useState, useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
enableScreens();
const Tab = createBottomTabNavigator();

import AboutScreen from './screens/About';
import TasksScreen from './screens/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ _focused, color, size }) => {
            let iconName;
            if (route.name === 'TasksScreen') {
              iconName = 'ios-list';
            } else if (route.name === 'AboutScreen') {
              iconName = 'ios-information-circle';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='TasksScreen' options={{ title: 'Tasks' }}>
          {() => <TasksScreen tasks={tasks} setTasks={setTasks} />}
        </Tab.Screen>
        <Tab.Screen
          name='AboutScreen'
          component={AboutScreen}
          options={{ title: 'About' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
