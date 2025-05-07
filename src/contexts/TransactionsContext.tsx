import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransaction(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  }
  useEffect(() => {
    fetchTransaction();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
