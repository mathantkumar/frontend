import { RootState } from "@/store";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Item {
  id: number;
  date: string;
  amount: string;
  status: string;
  balance: string;
}

interface ItemsState {
  items: Item[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  status: "idle",
  error: null,
};
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch("/api/items");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
});

export const createItem = createAsyncThunk<Item, Item>(
  "items/createItem",
  async (item) => {
    const response = await axios.post("http://localhost:3000/items", item);
    return response.data;
  }
);

export const updateItem = createAsyncThunk<Item, Item>(
  "items/updateItem",
  async (item) => {
    const response = await axios.put(
      `http://localhost:3000/items/${item.id}`,
      item
    );
    return response.data;
  }
);

export const deleteItem = createAsyncThunk<number, number>(
  "items/deleteItem",
  async (id) => {
    await axios.delete(`http://localhost:3000/items/${id}`);
    return id;
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })
      .addCase(createItem.fulfilled, (state, action: PayloadAction<Item>) => {
        state.items.push(action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action: PayloadAction<Item>) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteItem.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default itemsSlice.reducer;
