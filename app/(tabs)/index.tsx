import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Welcome from '@/components/Scrrens/Welcome'
import Login from '@/components/Scrrens/Login';
import Signup from '@/components/Scrrens/Signup';
import Verification from '@/components/Verification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
   
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          
          />
           <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
          
          />

      </Stack.Navigator>
   
  );
}
