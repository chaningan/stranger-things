export const loginUser = async (username, password) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const fetchMe = async (token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/users/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};
