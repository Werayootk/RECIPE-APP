import axios from "axios";

const YOUR_APP_KEY = "Your_key";
const YOUR_APP_ID = "Your_key";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  return await axios.get(url);
};