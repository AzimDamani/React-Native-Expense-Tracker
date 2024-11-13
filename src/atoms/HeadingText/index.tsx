import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
    children: string
}
const HeadingText = ({children} : Props) => {
    return(
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:100,
        color:"white"
    }
})

export default HeadingText;