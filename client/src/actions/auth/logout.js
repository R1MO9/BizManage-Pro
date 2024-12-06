import axios from "axios";
import cookie from "js-cookie";

const logout = async () => {
    try {
        cookie.remove("token");
        if (cookie.get("businessId")) {
            cookie.remove("businessId");
        }
    } catch (error) {
        console.log(error);
    }
};

export default logout;