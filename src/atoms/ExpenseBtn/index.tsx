import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


type Props = {
    title: string,
    selected: number,
    onPress: () => void
}

const ExpenseBtn = ({title, selected, onPress}:Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={{
            borderWidth:2,
            borderColor:selected === 1 ? "red" : "white",
            borderRadius:10,
            backgroundColor:"black",
            padding:20,
            margin:20
        }}>
            <Text style={{color:selected === 1 ? "red" : "white", textAlign:"center", fontWeight:500, fontSize:20}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}



export default ExpenseBtn;