import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './authNavigators';

const RootNavigator = () => {
    return (
       <NavigationContainer>
           <Auth/>
       </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})
