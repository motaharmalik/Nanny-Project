import React from 'react';
import {Text, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
 
 
const GoalItem = props => {
return (
   <TouchableNativeFeedback onPress= {props.onDelete } >
       <View style={styles.listItem} onTouchEnd >
         <Text >{props.title}</Text>
         </View>
         </TouchableNativeFeedback>
);
 
 
};
 
 
const style = StyleSheet.create({
   listItem: {
 
       padding: 10,
       marginVertical: 10,
       backgroundColor: '#ccc',
       borderColor: 'black',
       borderWidth: 1
     }
});
export default GoalItem;
