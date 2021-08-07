import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';

const Hearder = ({ title }) => {
    return (
        <View style={styles.header}>
            <View style={{marginLeft:10}}>
                <Icon
                    style={{}}
                    type="material-community"
                    name="arrow-left"
                    color={colors.headerText}
                    size={28}
                    onPress={() => { }}
                />

            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Hearder;

const styles = StyleSheet.create({

    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headHeight

    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft:80

    }
})
