import axios from 'axios';
import config from '../config'

const validateLogin = async (email, password) => {
    console.log('service called', email, password)
    const url = 'http://localhost:5000' + config.loginUrl;
    let body = {
        email1: "test@gmail.com",
        password2: "test"
    }
    try {
        const responce = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                // 'Set-Cookie': 'SameSite=None; Secure'
            },
            withCredentials: true,
        });
        return console.log("responce=--------", responce);
    }
    catch (err) {
        console.log(err);
    };
};

export {
    validateLogin
};