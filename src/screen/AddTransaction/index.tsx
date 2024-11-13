import React, { useState } from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { transaction, transactionType } from "../../types/Transaction";
import ExpenseBtn from "../../atoms/ExpenseBtn";
import IncomeBtn from "../../atoms/ExpenseBtn/IncomeBtn";
import Inputbtn from "../../atoms/InputBtn";
import CommonBtn from "../../atoms/commonBtn";


const AddTransaction = ({ navigation, route }: any) => {
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [type, setType] = useState<transactionType>("income");
    const [selectedT, setSelectedT] = useState(0)
    const handleSave = () => {
        const newTransaction = {
            id: Date.now().toString(),
            amount: parseFloat(amount),
            type,
            category,
            date: new Date().toISOString(),
        }
        route.params.addTransaction(newTransaction);
        navigation.goBack();
    }
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <Inputbtn
                value={amount}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onChangeText={setAmount}
            />
            <Inputbtn
                value={category}
                placeholder="Enter Category"
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

            <CommonBtn title={"SAVE"} onPress={() => handleSave()}/>
            
        </View>
    )
}

export default AddTransaction;