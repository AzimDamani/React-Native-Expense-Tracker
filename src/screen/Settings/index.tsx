import React from "react";
import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import HeadingText from "../../atoms/HeadingText";
import CommonBtn from "../../atoms/commonBtn";

const Settings = ({navigation, route}: any) => {
    const handleChangeCurrency = (value: string) => {
        route.params.changeCurrency(value);
        Alert.alert("Currency changed" , `${value} will be used for all the transactions`);
    }
    const handleThemeChange = (theme: string) => {
        route.params.changeTheme(theme);
    }
    return(
        <View style={{backgroundColor:"black", flex:1}}>
            <HeadingText children="Choose the currency"/>
            <CommonBtn title="Rupees" onPress={() => handleChangeCurrency("₹")}/>
            <CommonBtn title="Dollar" onPress={() => handleChangeCurrency("$")}/>
            <HeadingText children={`Current theme - ${route.params.theme}`}/>
            <CommonBtn title="Dark" onPress={() => handleThemeChange("dark")}/>
            <CommonBtn title="Light" onPress={() => handleThemeChange("light")}/>
        </View>
    )
}

export default Settings;