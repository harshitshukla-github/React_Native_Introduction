/*import {View, Text} from 'react-native';

const app = () =>{
  return(
    <View>
      <Text>Hi, my name is Harshit👋</Text>
    </View>
  )
}

export default app;*/

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

const CounterApp = () => {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Function to increament Counter
  const increamentCounter = () => {
    setCount(count + 1);
  }

  // Function to decrement Counter 
  const decrementCounter = () => {
    setCount(count-1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}></View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5F5F5',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  counterValueContainer:{
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 40,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minWidth: 150,
    alignItems: 'center',
  }
})

export default CounterApp;