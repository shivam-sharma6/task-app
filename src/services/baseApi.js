import axios from "axios";
 
const getRequest = async(url)=>{
    try{
        const apiRes = await axios.get(url);
        return apiRes.data ;
    } catch (error) {
        return {
            status : false,
            message : error.message
        }
    }

}

export {getRequest};