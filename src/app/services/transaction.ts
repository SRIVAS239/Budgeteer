export interface Transaction {
    transactionId: string;
    transactionName: string;
    transactionCategory: string;
    transactionAmount: number;
  }


//function call to get the data from Mock api -> call it in the parent component
export const fetchTransactions=async ():Promise<Transaction[]>=>{
    try{
        const response=await fetch('https://66fb477a8583ac93b40b4ac2.mockapi.io/api/v1/transactions');
        const data=await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error('Failed to fetch transactions:', error);
        throw error;}
}