import axios from "axios";

const instance = axios.create({
    
    baseURL: "https://file-share-3c1a8-default-rtdb.firebaseio.com/"
});

export default instance;
