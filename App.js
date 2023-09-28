import { StyleSheet, View } from 'react-native'
import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../Ecommerce/src/Navigator/MainNavigation'

const styles = StyleSheet.create({
  container:{ 
    flex:1 
  }
})
const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  )
}

export default App;