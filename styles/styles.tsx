import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // white background
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: 'black', // black border
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff', // Yellow orange background for input
    fontSize: 16,
  },
  button: {
    backgroundColor: 'orange', // orange button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Khaki text for button
    fontWeight: 'bold',
    fontSize: 18,
  },
  userInputView: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  workoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically center content
    marginBottom: 10,
    padding: 15, // Consistent padding on all sides
    backgroundColor: '#F57C00', 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Softer shadow
    shadowOpacity: 0.2, // Lighter shadow
    shadowRadius: 4, // More spread out shadow
    elevation: 3, // Matches other elevation
    width: '100%',
  },

  workoutName : {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterSection : {
    marginBottom: 20,
    backgroundColor: '#d1e7dd',
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  picker : {
    backgroundColor: '#f0f5f9', // Light gray background for picker
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c8c8c8', // Grey border for picker
  },
  list : {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f5f9', // Light gray background for list
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  emptyText : {
    textAlign: 'center',
    marginTop: 10,
  },
  otherDetails: {
    fontSize: 16,
    color: '#445c73', // Medium slate blue for additional details
    marginVertical: 5,
},
container2: {
  padding: 15,
  backgroundColor: '#e3f1f1', // Light teal for list items
  borderRadius: 8,
  marginBottom: 10,
  shadowColor: '#000', // Shadow for elevation
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 3,
},
workName: {
  fontSize: 20,
  fontWeight: '600',
  color: '#2b2e4a', // Dark navy blue for text
},
});
