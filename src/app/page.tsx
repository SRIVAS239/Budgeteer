import Dashboard from "./dashboard/page";
import Categorycard from "./UI/transactioncard";
import Navbar from "./UI/navbar";
import Transactioncard from "./UI/transactioncard";

export default function Home() {
  const transaction = {
    transactionId: "string",
    transactionName: "monthly groceries",
    transactionCategory: "Groceries",
    transactionAmount: 30.00,
  };
  
  return (
    <div className="flex flex-row">
      <div className="dashboard">
        <Dashboard/>
      </div>
      <div>
        <h3>Latest Transactions</h3>
        <Transactioncard transaction={transaction}/>
      </div>
      
    </div>
    
  );
}
