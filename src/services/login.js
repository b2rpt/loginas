import axios from "axios";
import config from "../config";

const validateLogin = async (email, password) => {
  const url = config.baseUrl + config.loginUrl;
  let body = {
    email: email,
    password: password,
  };
  try {
    return await axios
      .post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((responce) => {
        return responce;
      });
  } catch (err) {
    console.log(err);
  }
};

export { validateLogin };
