import { StyleSheet, View } from 'react-native'
import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../Ecommerce/src/Navigator/MainNavigation'
import { store, persistor } from './src/Service/Store'
import {Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const styles = StyleSheet.create({
  container:{ 
    flex:1 
  }
})
const App = () => {

  return (
    
    <SafeAreaProvider>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <View style={styles.container}>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </View>
      </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App;