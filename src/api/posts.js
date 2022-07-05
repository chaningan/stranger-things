export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const result = await response.json();
  return result;
};

export const fetchPostById = async (id) => {
  const response = await fetch(
    `"https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"${id}`
  );
  const result = await response.json();
  return result;
};

export const createPost = async (token, postObj) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postObj),
    }
  );
  const result = await response.json();
  return result;
};
