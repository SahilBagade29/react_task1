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
export const getContactCard = async() => {
  try{
    const response = await axios.get("http://localhost:5002/rankingsContactPage"); 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getServicesCard = async() => {
  try{
    const response = await axios.get("http://localhost:5003/Servicesrankings"); 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}