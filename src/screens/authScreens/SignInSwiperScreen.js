import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button } from "react-native-elements";
import { colors, parameters } from '../../global/styles';
import Swiper from 'react-native-swiper';

const SignInSwiperScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.fullCoverStyle}>
                <Text style={styles.coverText}>RESTAURANT's COVER</Text>
                <Text style={styles.coverText}>IN YOUR SIDE</Text>
            </View>

            <View style={{ flex: 3, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../assets/images/image1.png')}

                        />

                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../../assets/images/image2.png')}
                            style={styles.imageStyle}
                        />


                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../../assets/images/image3.png')}
                            style={styles.imageStyle}
                        />


                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../../assets/images/image4.png')}
                            style={styles.imageStyle}


                        />


                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../../assets/images/image5.png')}
                            style={styles.imageStyle}
                        />


                    </View>

                </Swiper>

            </View>
            <View style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 15, marginVertical: 30 }}>
                    <Button
                        title='SIGN IN'
                        buttonStyle={parameters.styleButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")

                        }}

                    />
                </View>
                <View style={{ marginHorizontal: 15, marginVertical: -10 }}>
                    <Button
                        title='Create An Account'
                        buttonStyle={parameters.createButtonStyle}
                        titleStyle={parameters.buttonTitleStyle}
                        onPress={()=>{
                            navigation.navigate("SignInScreen")

                        }}

                    />
                </View>


            </View>


        </View>
    )
}

export default SignInSwiperScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    fullCoverStyle: {
        alignItems: "center",
        marginVertical: 20

    }

    ,
    coverText: {
        color: colors.statusbar,
        fontWeight: "bold",
        fontSize: 20

    },
    slide1: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center"

    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 14,
        borderColor: colors.grey3,
        borderWidth: 1

    }
})
