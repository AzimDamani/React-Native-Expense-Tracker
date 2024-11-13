export type transaction = {
    id: string,
    amount: number,
    type: transactionType,
    category: string,
    date: string

}

export type transactionType = "income" | "expense";