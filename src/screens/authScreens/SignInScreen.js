import React, { useState, useRef } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Hearder from '../../components/Hearder';
import { colors } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


const SignInScreen = () => {
    const [textInputPassword, setTextInputPassword] = useState(false);



    const textInputEmail = useRef(1);
    const inputPasswordText = useRef(2);


    return (
        <View style={styles.container}>
            <Hearder
                title="MY ACCOUNT"
                type="arrow-left"
            />
            <View style={{ alignItems: "center" }}>
                <Text style={styles.signInText} >Sign-In</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.paragraphText} >Please enter the email & password</Text>
                <Text style={styles.paragraphText} >registered with your account</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View >
                    <TextInput
                        style={styles.textInputEmail}
                        placeholder="Email"
                        placeholderTextColor="rgb(153,153,153)"
                        selectionColor={'#000'}
                        ref={textInputEmail}

                    />
                </View>
                <View style={styles.textInputPassword}>
                    <Animatable.View animation={textInputPassword ? "" : "fadeInLeft"}
                        duration={400}
                    >
                        <Icon
                            name="lock"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                        />

                    </Animatable.View>
                    <TextInput
                        placeholderTextColor="rgb(153,153,153)"
                        style={{ width: "80%", color: "#000" }}
                        placeholder="Password"
                        selectionColor={'#000'}
                        secureTextEntry={true}
                        autoCapitalize={'characters'}


                        //function 
                        ref={inputPasswordText}
                        onFocus={() => {
                            setTextInputPassword(false)
                        }}
                        onBlur={() => {
                            setTextInputPassword(true)
                        }}


                    />
                    <Animatable.View animation={textInputPassword ? "" : "fadeInLeft"}
                        duration={400}

                    >
                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                            style={{ marginRight: 10 }}
                        />

                    </Animatable.View>

                </View>

            </View>



        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    signInText: {
        color: colors.black,
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10

    },
    paragraphText: {
        color: colors.grey3,
        fontSize: 14,
        marginLeft: 16,

    },
    textInputEmail: {
        borderColor: colors.CardComment,
        borderRadius: 8,
        borderWidth: 0.5,
        marginHorizontal: 20,
        color: "red",
        paddingLeft: 10,

    },
    textInputPassword: {
        borderColor: colors.CardComment,
        borderRadius: 8,
        borderWidth: 0.5,
        marginHorizontal: 20,
        color: colors.buttons,
        paddingLeft: 10,
        // paddingRight:10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"


    },

})
