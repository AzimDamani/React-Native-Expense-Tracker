import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    amntType: string,
    category: string,
    currency: string,
    amount: number,
    onPress: () => void
}

const TransactionList = ({ category, currency, amount, amntType, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.tab}>
            <View style={styles.info}>
                <View><Text style={styles.cat}>{category}</Text></View>
                <View><Text style={{
                    color: amntType === "income" ? "#94ff15" : "red",
                    fontWeight: "500",
                    fontSize: 20,
                    flex: 1,
                    textAlign: "right"
                }}>{currency} {amntType === "income" ? "+" : "-"}{amount}</Text></View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginBottom: 15,
        borderRadius: 20,
        boxShadow: "rgba(255, 255, 255, 0.3) 0px 20px 30px -10px"
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cat: {
        color: "white",
        fontSize: 20,
        fontWeight: 200,
        flex: 1,
        textAlign: "left"
    },
    amnt: {
        color: "white",
        fontWeight: "500",
        fontSize: 20,
        flex: 1,
        textAlign: "right"
    }
})


export default TransactionList;