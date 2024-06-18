import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../features/itemSlice";
import { AppDispatch } from "@/store";

interface ItemFormProps {
  onClose: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onClose }) => {
  const [amount, setAmount] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createItem({
        amount: "",
        balance: "",
        id: 0,
        date: "",
        status: "",
      })
    );
    setAmount("");
    setBalance("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <button type="submit">Add Item</button>
      <button onClick={onClose}>Close</button>
    </form>
  );
};

export default ItemForm;
