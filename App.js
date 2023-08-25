import { StyleSheet, View } from 'react-native'
import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import Registration from './src/Screens/Registration';

const styles = StyleSheet.create({
  container:{ 
    flex:1 
  }
})
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Register' component={Registration} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  )
}

export default App;