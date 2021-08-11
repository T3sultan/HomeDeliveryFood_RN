import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Hearder from './src/components/Hearder';
import { colors } from './src/global/styles'
import RootNavigator from './src/navigation/RootNavigator';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInSwiperScreen from './src/screens/authScreens/SignInSwiperScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}

      />
      {/* <SignInScreen /> */}
      {/* <SignInSwiperScreen/> */}
      <RootNavigator/>

    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "#fff"
  }

})
