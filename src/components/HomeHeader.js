import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

const HomeHeader = () => {
    const BadgeIcon = withBadge(0)(Icon)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.white}
                    size={32}
                />

            </View>
            <View style={styles.foodHeadStyle}>
                <Text style={styles.allFoodStyle}>ALL FOOD</Text>
            </View>
            <View style={styles.cartStyle}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={30}
                    color={colors.white}
                />


            </View>



        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.statusbar,
        height: parameters.headHeight,
        justifyContent:"space-between"
    },
    header: {
        //  alignItems:"center",
        justifyContent: "center",
        marginLeft: 15

    },
    allFoodStyle: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold"
    },
    foodHeadStyle: {
        justifyContent: "center",

    },
    cartStyle:{
        justifyContent:"center",
        marginRight:15
        
    }
})
