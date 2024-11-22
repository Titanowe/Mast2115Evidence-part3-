import React from "react";

export type WorkOutDetails ={
    Workout_Name:String;
    duration: string;
    exercise_Type: string;
    calories: number;
    
}

export type RootStackParamList = {
    HomeScreen: undefined

    ManageWorkoutScreen: {

        workouts: WorkOutDetails[];
        setWorkOuts: React.Dispatch<React.SetStateAction<WorkOutDetails[]>>;
        totalCalories: number;
        setTotalCalories: React.Dispatch<React.SetStateAction<number>>;
    },
   FilterScreen: {
    workouts: WorkOutDetails[];
   }
}