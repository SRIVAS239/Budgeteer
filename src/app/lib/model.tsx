export type Transaction = {
    transactionId: string;
    transactionName: string;
    transactionCategory: string;
    transactionAmount: number;
    transactionDate:Date;
  };

export type Category={
    categoryId:string;
    categoryName:string;
    categoryCapAmount:number;
    categoryUsedAmount:number;
}