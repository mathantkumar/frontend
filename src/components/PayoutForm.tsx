import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchItems, deleteItem } from "../features/itemSlice";

interface Item {
  id: number;
  date: string;
  amount: string;
  status: string;
  balance: string;
}

interface PayoutFormProps {
  onClose: () => void;
}

const PayoutForm: React.FC<PayoutFormProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.items.items);
  const status = useSelector((state: RootState) => state.items.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h2>Payout Form</h2>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && (
        <ul>
          {items.map((item: Item) => (
            <li key={item.id}>
              {item.date} - {item.amount}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <div>Error loading items</div>}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PayoutForm;
