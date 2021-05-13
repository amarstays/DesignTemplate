import { portfolio } from "../assets/urls";

export const getAuthToken = () => {
  return localStorage.getItem("XKEY");
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  else return user;
};

export const getImages = (type: string) => {
  const keys: string[] = Object.keys(portfolio).filter((key) =>
    key.includes(type)
  );

  const arr: any[] = [];

  keys.forEach((el) => arr.push(portfolio[el]));

  return arr;
};
