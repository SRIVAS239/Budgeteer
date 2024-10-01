"use client";
import { useEffect, useState } from "react";
import Dashboard from "./dashboard/page";

import TransactionDetails from "./UI/transactionDetails";
import TransactionCard from "./UI/transactioncard";
import { fetchTransactions, Transaction } from "./services/transaction";

export default function Home() {
  /*const transactions = [
    {
      transactionId: "1",
      transactionName: "Monthly Groceries",
      transactionCategory: "Groceries",
      transactionAmount: 200.0,
    },
    {
      transactionId: "2",
      transactionName: "Electricity Bill",
      transactionCategory: "Utilities",
      transactionAmount: 100.0,
    },
    
  ];*/

  //state for latest transactions -> fetched from api
  const [latestTransactions,setLatestTransactions]=useState<Transaction[]>([]);

  //state for side panel
    const [isOpen, setIsOpen] = useState(false);

    //state for selected transaction
    const [selectedState,setSelectedState]=useState(null);
    
    //defining eventhandler for card click -> open side panel, pass selected transaction
    //function as a prop
    const onSelectCard = (transaction:any) => {
        setIsOpen(!isOpen);
        setSelectedState(transaction);
      };

      //function to close side panel
      const onDeselectCard=()=>{
        setIsOpen(!isOpen);
        setSelectedState(null);
      }

      //function to load latest transactions
      const loadTransactions=async()=>{
        try{
          const tData=await fetchTransactions();
          setLatestTransactions(tData);
          console.log(setLatestTransactions);
        }
        catch(err)
        {
          console.log(err);
        }
      }

      useEffect(() => {
        loadTransactions();
      }, []);
  
      return (
    <div className="flex flex-row">
      <div className="dashboard mr-6">
        <Dashboard/>
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-bold">Latest Transactions</h3>

        {latestTransactions.map((transaction) => (
          <TransactionCard
            transaction={transaction}
            onCardSelect={onSelectCard}
          />
        ))}
      </div>
      {/* Side panel opens, pass props to open, close and transaction data */}
      
      <TransactionDetails isOpen={isOpen} transaction={setSelectedState} onPanelClose={onDeselectCard} />
      
    </div>
    
  );
}
