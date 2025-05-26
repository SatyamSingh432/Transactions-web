const API_URL = "http://localhost:8080";
// const API_URL = "https://yardstick-4l5u.onrender.com";

export const addTransaction = async ({
  amount,
  date,
  category,
  description,
}) => {
  const res = await fetch(`${API_URL}/api/transactionamt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, date, category, description }),
  });
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
};

export const getTransactions = async (month = null) => {
  const url = month
    ? `${API_URL}/api/transactionamt?month=${month}`
    : `${API_URL}/api/transactionamt`;
  const res = await fetch(url);
  return res.json();
};

export const deleteTransaction = async (id) => {
  const res = await fetch(`${API_URL}/api/transactionamt/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const updateTransaction = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/api/transactionamt/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};
