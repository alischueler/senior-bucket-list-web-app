import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const COMPLETED_API = `${API_BASE}/completed`;

export const createCompleted = async (completed) => {
    const response = await axios.post(COMPLETED_API, completed)
    return response.data;
}
export const findCompleted  = async ()     => {
    const response = await axios.get(COMPLETED_API);
    return response.data;
}
export const deleteCompleted = async (cid) => {
    const response = await axios
        .delete(`${COMPLETED_API}/${cid}`);
    return response.data;
}