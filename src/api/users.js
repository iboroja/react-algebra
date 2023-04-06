import apiOrigin from "./api";

export const registerUser = (user) => {
  return fetch(`${apiOrigin}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const loginUser = (user) => {
  return fetch(`${apiOrigin}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const getAllUsers = (authToken) => {
  return fetch(`${apiOrigin}/api/users?page=1&size=200`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};
