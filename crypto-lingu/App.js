import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({navigation}) => {
  return (<View style={styles.container}>
            <Text>Here is some basic text!</Text>
            <ScrollView>

            <Button 
              title={'Story 1'}
              onPress={() => navigation.navigate('Story 1')}></Button>
            </ScrollView>
            <StatusBar style="auto" />
          </View>)
}

const StoryScreen = ({navigation, route}) => {
  return(
    <View><Text>This is story 1.</Text></View>
  )
}

const Stack = createNativeStackNavigator();

// Stack of possible screens
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: 'Home'}} />
        <Stack.Screen 
          name="Story 1" 
          component={StoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  
  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

