import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, parameters } from '../global/styles'

const HomeDeliver = () => {
    const [delivery, setDelivery] = useState(true);
    return (

        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-evenly" }}>
            <TouchableOpacity
                onPress={() => {
                    setDelivery(true)
                }}
            >
                <View style={{
                    ...styles.deliveryButton,
                    backgroundColor: delivery ? colors.deliveryButton : colors.grey5
                }}>
                    <Text style={styles.deliveryText}>Delivery</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setDelivery(false)
                }}
            >
                <View style={{
                    ...styles.deliveryButton,
                    backgroundColor: delivery ? colors.grey5 : colors.deliveryButton
                }}>
                    <Text style={styles.deliveryText}>Reciver</Text>
                </View>
            </TouchableOpacity>



        </View>


    )
}

export default HomeDeliver

const styles = StyleSheet.create({
    deliveryButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,


    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,
        color: colors.black
    }
})
