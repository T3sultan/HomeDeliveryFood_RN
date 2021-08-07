import React from 'react'
import { StyleSheet, Text, View,StatusBar} from 'react-native'
import Hearder from './src/components/Hearder';
import {colors} from './src/global/styles'

const App = () => {
  return (
    <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      
    />
      <Hearder title = "MY ACCOUNT" />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {

    flex: 1
  }

})
