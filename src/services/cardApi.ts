import axios from "axios";

export const getCard = async() => {
  try{
    const response = await axios.get("http://localhost:5001/rankings"); 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


