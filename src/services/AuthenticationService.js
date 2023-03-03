import axios from "axios"

const ApiManager = axios.create({
    baseURL:'http://proteinium.iroidtechnologies.in/api/v1/login',
    responseType:'json',
    withCredentials:true, 

})

export default ApiManager;