import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
 
 
const GoalItem = props => {
return (
   <TouchableOpacity onPress= {props.onDelete.bind(this, props.id) } >
       <View style={styles.listItem} onTouchEnd >
         <Text >{props.title}</Text>
         </View>
         </TouchableOpacity>
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
