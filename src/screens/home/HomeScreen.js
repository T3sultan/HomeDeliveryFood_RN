import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import HomeDeliver from '../../components/HomeDeliver'
import HomeHeader from '../../components/HomeHeader'
import { colors, parameters } from "../../global/styles"

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <HomeHeader />
            <HomeDeliver />


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

})
