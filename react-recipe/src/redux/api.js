import axios from "axios";

const YOUR_APP_KEY = "d50e3e48ebf07a9f4c93ed515afb467c";
const YOUR_APP_ID = "a6d67b28";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  return await axios.get(url);
};