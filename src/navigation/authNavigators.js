import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignInSwiperScreen from '../screens/authScreens/SignInSwiperScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const Auth = createStackNavigator();



const authNavigators = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="SingInSwiperScreen"
                component={SignInSwiperScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}

            />
            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}

            />
        </Auth.Navigator>
    )
}

export default authNavigators

const styles = StyleSheet.create({})
