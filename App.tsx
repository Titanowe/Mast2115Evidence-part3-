import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';
import { RootStackParamList } from './types';
import { HomeScreen } from './screens/HomeScreen';
import { ManageWorkouts } from './screens/ManageWorkouts';
import { FilterScreen } from './screens/FilterScreen';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerTitle: 'Place Order' }} 
        />
        <Stack.Screen 
          name="ManageWorkoutScreen" 
          component={ManageWorkouts} 
          options={{ headerTitle: 'Manage Meals' }} 
        />
        <Stack.Screen 
          name="FilterScreen" 
          component={FilterScreen} 
          options={{ headerTitle: 'Filter Dish Type' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for layout and the logo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centers the content vertically
    alignItems: 'center',  // Centers the content horizontally
    marginTop: 20,  // Optional margin from the top
  },
  logo: {
    width: 200,  // Adjust width as necessary
    height: 100,  // Adjust height as necessary
    resizeMode: 'contain',  // Ensures the logo fits inside the provided space
  },
});
