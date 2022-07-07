export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const result = await response.json();
  return result;
};

export const fetchPostById = async (id) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${id}`
  );
  const result = await response.json();
  return result;
};

export const createPost = async (token, postObj) => {
  console.log("token", token, postObj);
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post: postObj }),
    }
  );
  const result = await response.json();
  return result;
};

export const deletePost = async (token, id) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const editPost = async (token, id, postObj) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post: postObj }),
    }
  );
  const result = await response.json();
  return result;
};

export const messagePost = async (token, id, message) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${id}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: message,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};
