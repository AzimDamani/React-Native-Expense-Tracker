import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
type Props = {
    title: string,
    onPress: () => void
}
const AddTrans = ({title, onPress}: Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.btn} >
            <Text style={styles.txt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    btn:{
        backgroundColor:"white",
        borderRadius:10,
        margin:10,
        padding:5
    },
    txt:{
        color:"black",
        fontSize:30,
        fontWeight:600,
        textAlign:"center"
        
    }
})

export default AddTrans;