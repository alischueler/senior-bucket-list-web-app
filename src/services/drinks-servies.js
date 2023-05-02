import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const COMPLETED_API = `${API_BASE}/drinks`;
// const COMPLETED_API = "http://localhost:4000/api/completed"

export const createDrinks = async (drinks) => {
    const response = await axios.post(COMPLETED_API, drinks)
    return response.data;
}
export const findDrinks  = async ()     => {
    const response = await axios.get(COMPLETED_API);
    return response.data;
}
export const deleteDrinks = async (did) => {
    const response = await axios
        .delete(`${COMPLETED_API}/${did}`);
    return response.data;
}