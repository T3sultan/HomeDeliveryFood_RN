import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import HomeHeader from '../../components/HomeHeader'
import { colors } from "../../global/styles"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View>
            <HomeHeader/>


            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
