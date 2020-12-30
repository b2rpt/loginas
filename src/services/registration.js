import axios from "axios";
import confg from "../config";

const registerUser = async (fullName, email, password) => {
  const url = confg.baseUrl + confg.registerUserUrl;
  let body = {
    userName: fullName,
    email: email,
    password: password,
    isAdmin: false
  };
  try {
    return await axios
      .post(url, body, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((responce) => {
        console.log(responce);
        return responce;
      });
  } catch (err) {
    console.log(err);
  }
};

export { registerUser };
