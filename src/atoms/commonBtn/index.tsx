import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props ={
    title: string,
    onPress: () => void
}
const CommonBtn = ({title, onPress}: Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        padding:20,
        backgroundColor:"white",
        margin:20,
        borderRadius:10
    },
    txt:{
        color:"black",
        fontWeight:900,
        fontSize:20,
        textAlign:"center",
    }
})


export default CommonBtn;