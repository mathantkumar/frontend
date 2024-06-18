const API_URL = "http://localhost:3001/items";

export const fetchItems = async (): Promise<any[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return response.json();
};

export const createItem = async (item: any): Promise<any> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    const data = await response.json(); // Need to await the response.json() to get the data
    console.log(data);
    throw new Error("Failed to create item");
  }
  return response.json();
};

export const updateItem = async (id: number, item: any): Promise<any> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  return response.json();
};

export const deleteItem = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete item");
  }
};
