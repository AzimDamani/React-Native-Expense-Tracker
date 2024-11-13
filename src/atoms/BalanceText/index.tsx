import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
    children: string
}
const BalanceText = ({children} : Props) => {
    return(
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:60,
        fontWeight:500,
        color:"#ececec"
    }
})

export default BalanceText;