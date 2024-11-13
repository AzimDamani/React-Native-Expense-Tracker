import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { transactionType } from "../../types/Transaction";
import CommonBtn from "../../atoms/commonBtn";
import Inputbtn from "../../atoms/InputBtn";
import IncomeBtn from "../../atoms/ExpenseBtn/IncomeBtn";
import ExpenseBtn from "../../atoms/ExpenseBtn";


const TransactionDetails = ({navigation, route}: any) => {
    const {item} = route.params;
    const [amount, setAmount] = useState<string>(String(item.amount));
    const [category, setCategory] = useState<string>(item.category);
    const [type, setType] = useState<transactionType>(item.type);
    const [selectedT, setSelectedT] = useState(type === "income" ? 0 : 1)
    const handleDelete = () => {
        route.params.deleteTransaction(item.id);
        navigation.goBack();
    }

    const handleSave = () => {
        const EditedTransaction = {
            ...item,
            amount: parseFloat(amount),
            category: category,
            type: type
        }
        // console.log(EditedTransaction);
        route.params.EditTransaction(EditedTransaction);
        navigation.goBack();
    }
    return(
        <View style={{backgroundColor:"black", flex:1}}>
            
            <Inputbtn 
            value={amount}
            keyboardType="numeric"
            onChangeText={setAmount} 
            />
            <Inputbtn 
            value={category}
            placeholder="Enter category"
            onChangeText={setCategory}
            />
             <IncomeBtn title={"Income"} selected={selectedT} onPress={() => {
                setSelectedT(0);
                setType("income")
            }} />
             <ExpenseBtn title={"Expense"} selected={selectedT} onPress={() => {
                setSelectedT(1);
                setType("expense")
            }} />
            
            <CommonBtn title="SAVE CHANGES" onPress={() => handleSave()}/>
            <CommonBtn title="DELETE" onPress={() => handleDelete()}/>
        </View>
    )
}


export default TransactionDetails;