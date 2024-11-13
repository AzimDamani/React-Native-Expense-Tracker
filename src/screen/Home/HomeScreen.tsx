import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { transaction, transactionType } from "../../types/Transaction";
import HeadingText from "../../atoms/HeadingText";
import BalanceText from "../../atoms/BalanceText";
import AddTrans from "../../atoms/AddTrans";
import TransactionList from "../../atoms/TransactionList";





const HomeScreen = ({ navigation }: any) => {
    const [transactions, setTransactions] = useState<transaction[]>([]);
    const [currency, setCurrency] = useState<string>("₹");
    const [theme, setTheme] = useState<string>("dark");
    const calculateBalance = () => {
        return transactions.reduce((balance, transaction) => {
            return transaction.type === "income" ? balance + transaction.amount : balance - transaction.amount
        }, 0)
    }
    const changeCurrency = (changedCurrency: string) => {
        setCurrency(changedCurrency);
    }
    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
    }
    const addTransaction = (newTransaction: transaction) => {
        setTransactions((prev) => [newTransaction, ...prev]);
    }
    const deleteTransaction = (transactionId: string) => {
        setTransactions((prev) => prev.filter((t) => t.id !== transactionId))
    }
    const EditTransaction = (EditedTransaction: transaction) => {
        setTransactions((prev) => prev.map((t) => t.id === EditedTransaction.id ? EditedTransaction : t))
    }
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#000000", padding: 2 }}>
            <Pressable onPress={() => navigation.navigate("Settings", { changeCurrency, theme, changeTheme })}>
                <Text style={{ color: "white" }}>Settings</Text>
            </Pressable>
            <HeadingText children={"Current Balance"} />
            <BalanceText children={`${currency} ${calculateBalance()}`} />
            <AddTrans title={"Add New Transaction"} onPress={() => navigation.navigate("AddTransaction", { addTransaction })} />
            <View style={{marginTop:30}}>
                <FlatList

                    data={transactions}
                    keyExtractor={(item: transaction) => item.id}
                    renderItem={({ item }) => (
                        <TransactionList category={item.category} amntType={item.type} currency={currency} amount={item.amount} onPress={() => navigation.navigate("TransactionDetails", { deleteTransaction, item, EditTransaction })} />

                    )}
                />
            </View>
        </SafeAreaView>


    )
}

export default HomeScreen;