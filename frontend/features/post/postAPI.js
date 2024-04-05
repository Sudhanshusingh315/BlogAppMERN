import axios from "axios";

export const createPost =async (postData) =>{
    const response = await axios.post('/api/post/postcreate',postData) 
    return response;
}