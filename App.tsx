import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { WorkOutDetails } from './types'
import React from 'react';

export default function App() {

  const[workouts, setWorkOuts] = useState<WorkOutDetails[]>([
   
  ]);

  const[WorkoutName, setWorkOutName] = useState<string>('');
  const[duration, setDuration] = useState<string>('');
  const[exerciseType, setType] = useState<string>('');
  const[calories, setcalories] = useState<string>('');
  const[TotalCalories,setTotalcalories] =useState<number>(0);

  const ExerciseType = ['Cardio', 'Strength', 'Flexibility', 'Balance', 'HIIT','Aerobics'];
  const handleSubmit =() => {
    if (WorkoutName && duration && exerciseType && calories) {
      const newWorkout : WorkOutDetails = {
        Workout_Name: WorkoutName,
        duration: parseInt(duration),
        exercise_Type: exerciseType,
        calories: parseInt(calories)
      };
      setWorkOuts([...workouts, newWorkout]);
      setTotalcalories(TotalCalories + newWorkout.calories);
      
    
    }
  }
  const totalWorkouts = workouts.length;
  return (
    <SafeAreaView style={styles.itemContainer}>
   <View>
    <Text style={styles.heading}> Fitness Tracker</Text>
   </View>

   <View style={styles.summaryContainer}>
    <Text style={styles.summaryHeading} >TODAY'S SUMMARY</Text>
   </View>
   <Text style={styles.summaryText}>Total Workouts: {totalWorkouts}</Text>
   <Text style={styles.summaryText}>Total Calories Burnt: {TotalCalories}</Text>
   
   <FlatList
   style={styles.listStyle}
   data={workouts}
   keyExtractor={(item, index) => index.toString()}
   renderItem={({ item }) => (
    <View style={styles.container}>
      <Text style={styles.workName}>Workout Name: {item.Workout_Name}</Text>
      <Text style={styles.otherDetails}>Duration: {item.duration} min </Text>
      <Text style={styles.otherDetails}> Workout type:{item.exercise_Type}</Text>
      <Text style={styles.otherDetails}>Calories burnt:{item.calories}</Text>
    </View>
   )}
  ></FlatList>
  <View style={styles.userInputView}>
    <TextInput style={styles.input}
    placeholder='Work out name'
    value={WorkoutName}
    onChangeText={setWorkOutName}>
    </TextInput>

<TextInput style={styles.input}
placeholder='Duration (min)'
value={duration}
onChangeText={setDuration}>
</TextInput>

<Picker 
selectedValue={exerciseType}
onValueChange={(itemValue) => setType(itemValue)}
style={styles.input}>

  {ExerciseType.map((exerciseType) => (
    <Picker.Item label={exerciseType} value={exerciseType} key={exerciseType}/>
  ))}
</Picker>

<TextInput
style={styles.input}
placeholder='Calories burnt'
value={calories}
onChangeText={setcalories}>
</TextInput>

<TouchableHighlight onPress={handleSubmit} style={styles.button}>
  <Text style={styles.buttonText}>Save</Text>
</TouchableHighlight>
  </View>
    </SafeAreaView>
   
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#556B2F'
  },
  summaryHeading:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#E07A5F'
  },
  container: {
    flex: 1,
    backgroundColor: '#81B29A',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding:20,
  },
  summaryContainer:{
    flex: 1,
    backgroundColor: '#E07A5F',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding:20,
    
  },

  listStyle:{
    maxHeight: 1500,
  },
  itemContainer:{
    flex:2,
    padding: 25,
    marginVertical: 8,
    backgroundColor:'#DDBEA9',
  },
  workName:{
    fontSize:23,
    fontWeight:"bold",
  },
  heading:{
    fontSize:30,
    fontWeight:"bold",
    backgroundColor:'#E07A5F',
  },
  otherDetails:{ 
    fontSize:30,
    fontWeight:"bold",
  },
  separator:{
    height:20,
  },
  headerImage:{
    width: '40%',
    height: 200,
    marginBottom:20,
  },
  userInputView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 450,
    height: 350,
    marginVertical: 5,
    backgroundColor: '#3D405B',
    padding: 10,
    marginTop: 120,
    marginBottom: 40,
  },
input: {
  width: '100%',
  height: 40,
  backgroundColor: 'white',
  paddingHorizontal: 10,
  marginVertical: -15,
  borderRadius: 5,
  color: 'black',
  marginTop: 30,
  fontSize: 20,
},
button: {
  backgroundColor: '#F2CC8F',
  paddingVertical: 15,
  paddingHorizontal: 40,
  borderRadius: 40,
  marginVertical: 10,
  alignItems: 'center',
  marginTop: 40,
},

buttonText: {
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold'
  },

summaryText:{
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold'
},

});
