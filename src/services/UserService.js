import axios from 'axios';

const USER_DATA_POST_URL = "http://localhost:9090/api/registerUser";
const USER_DATA_VERIFY_URL = "http://localhost:9090/api/verifyUser";
const ADMIN_DATA_VERIFY_URL = "http://localhost:9090/api/verifyAdmin";

class UserService {

    async registerUser(user) {
        console.log("Inside register user")
        return axios.post(USER_DATA_POST_URL, user);

    }

    verifyUser(login) {
        console.log("Inside verify user")
        return axios.post(USER_DATA_VERIFY_URL, login);
    }

    verifyAdmin(login) {
        console.log("Inside verify admin")
        return axios.post(ADMIN_DATA_VERIFY_URL, login);
    }
}
export default new UserService();
