const API_URL = "http://localhost:8080";
// const API_URL = "https://yardstick-4l5u.onrender.com";

export const loginUser = async ({ email, password }) => {
  console.log(email, password);
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const resJson = await res.json();
  localStorage.setItem("token", resJson.token);

  return resJson;
};

export const verifyToken = async (token) => {
  const res = await fetch(`${API_URL}/api/auth/verify`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const registerUser = async ({ username, email, password }) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  if (res.ok) {
    const resJson = await res.json();
    localStorage.setItem("token", resJson.token);
    return resJson;
  }
  return { error: true };
};

export const addTransaction = async ({
  amount,
  date,
  category,
  description,
  token,
}) => {
  // console.log(amount, date, category, description, token);
  const res = await fetch(`${API_URL}/api/transactionamt`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ amount, date, category, description }),
  });
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
};

export const getTransactions = async (token, month = null) => {
  const url = month
    ? `${API_URL}/api/transactionamt?month=${month}`
    : `${API_URL}/api/transactionamt`;
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: token },
  });
  return res.json();
};

export const deleteTransaction = async (id, token) => {
  // console.log(id, token);
  const res = await fetch(`${API_URL}/api/transactionamt/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: token },
  });
  return res.json();
};

export const updateTransaction = async ({ id, formData, token }) => {
  console.log(formData);
  const res = await fetch(`${API_URL}/api/transactionamt/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ formData }),
  });
  return res.json();
};
