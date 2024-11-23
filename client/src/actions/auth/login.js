import Axios from 'axios';

const LoginURL = 'http://localhost:3000/api/auth/login';

const login = async (email, password) => {
    try {
        if (!email || !password) {
            console.log('Email and password are required');
            return;
        }
        const res = await Axios.post(LoginURL, { email, password });
        console.log(res.data.data.user);

        // Setting the cookie
        document.cookie = `token=${res.data.data.user.token}; path=/;`;
    } catch (error) {
        console.log(error);
    }
};

export default login;
