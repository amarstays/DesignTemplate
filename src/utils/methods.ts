export const getAuthToken = () => {
  return localStorage.getItem("XKEY");
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  else return user;
};
