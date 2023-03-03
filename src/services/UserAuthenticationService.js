import ApiManager from "./AuthenticationService";


const userLogin = async data => {
    try {
        const result = await ApiManager("/user/login",{
            method:"post",
            headers:{
                'content-type':"application/json"

            },
            data:data
        })
        return result 
    } catch (error) {
        return error.response.data;
    }
}

export default userLogin;