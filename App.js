import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
 
export default function App() {
 const [enteredGoal, setEnteredGoal] = useState('');
 const [courseGoals, setCourseGoals] = useState([]);
 
 
 const addGoalHandler = goalTitle => {
   setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }
   ]);
 
 };
 
 return (
   <ScrollView>
     <View style={styles.screen}>
       <GoalInput onAddGoal={addGoalHandler} />
 
       <FlatList
         data={courseGoals}
         keyExtractor={(item, index) => item.id}
         renderItem={itemData => < GoalItem title={itemData.item.value} />
 
         }
       />
 
 
     </View>
   </ScrollView>
 );
}
 
 
const styles = StyleSheet.create({
 screen: {
   padding: 50
 },
 
 
});

