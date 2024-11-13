import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


type Props = {
    title: string,
    selected: number,
    onPress: () => void
}

const IncomeBtn = ({title, selected, onPress}:Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={{
            borderWidth:2,
            borderColor:selected === 0 ? "#9bff26" : "white",
            borderRadius:10,
            backgroundColor:"black",
            padding:20,
            margin:20
        }}>
            <Text style={{color:selected === 0 ? "#9bff26" : "white", textAlign:"center", fontWeight:500, fontSize:20}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}



export default IncomeBtn;