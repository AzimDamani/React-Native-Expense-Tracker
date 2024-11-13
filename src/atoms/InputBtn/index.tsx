import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
    value: any,
    placeholder?: string,
    keyboardType?: any,
    onChangeText: any
}
const Inputbtn = ({value, placeholder, keyboardType, onChangeText}: Props) => {
    return(

        <View style={{padding:20}}>
            <TextInput style={style.inp}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        />
        </View>
    )
}

const style = StyleSheet.create({
    inp:{
        fontSize:30,
        color:"white",
        borderBottomWidth: 2,
        borderBottomColor: "white",
        
        
    }
})


export default Inputbtn;