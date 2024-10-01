

interface SidePanelProps {
  isOpen: boolean;
  transaction:any;
  onPanelClose:()=>void;
}

const TransactionDetails: React.FC<SidePanelProps> = ({ isOpen, transaction,onPanelClose }) => {
  return (
    <>
      {/* Side panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold">Side Panel</h2>
          <p>transaction.transactionName</p>
          <button
            onClick={onPanelClose}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Close Panel
          </button>
        </div>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          onClick={onPanelClose}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
      )}
    </>
  );
};

export default TransactionDetails;
