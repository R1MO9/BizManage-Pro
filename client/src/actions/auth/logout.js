import axios from "axios";
import cookie from "js-cookie";

const logout = async () => {
    try {
        cookie.remove("token");
    } catch (error) {
        console.log(error);
    }
};

export default logout;