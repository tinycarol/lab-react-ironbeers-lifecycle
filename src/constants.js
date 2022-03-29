import axios from "axios";

export const getBeers = async () => {
  const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
  
  if (!response.status===200) {
    throw new Error("Failed to fetch Beers.");
  }
  console.log("returning data")
  return response.data;
};

