import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = ( {navigation} : any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("HomeScreen")
        }, 2000)
    }, [])
    return(
        <View style={styles.fullpage}>
            <Text style={styles.logo}>Expense Tracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fullpage: {
        flex:1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },

    logo:{
        fontSize:60,
        color:"white",
        fontWeight:300
    }
})

export default SplashScreen;