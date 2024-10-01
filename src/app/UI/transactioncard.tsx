
interface TransactionCardProps {
    transactionId: string;
    transactionName: string;
    transactionCategory: string;
    transactionAmount: number;
  }
  interface TransactionProps {
    transaction: TransactionCardProps;
    onCardSelect: (transaction: TransactionCardProps) => void; 
  }
  const TransactionCard: React.FC<TransactionProps> = ({ onCardSelect, transaction }) => {
//export default function Transactioncard({transaction}:TransactionProps){
    

return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96" onClick={() => onCardSelect(transaction)}>
        <div className="p-4">
            <div className="toprow flex flex-row">
                <h6 className="text-slate-800 font-semibold">{transaction.transactionName}</h6>
                <h6 className="display-amount text-green-600 leading-normal font-semibold">
                    {`+${transaction.transactionAmount}`}</h6>
            </div>
            <div className="bottomrow flex flex-row">
                <p className="label text-slate-600 leading-normal font-light">
                    {`Category : ${transaction.transactionCategory}`}
                </p>
            </div>
        
        
  </div>
</div>
    );
}
export default TransactionCard;