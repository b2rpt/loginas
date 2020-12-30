import axios from "axios";
import config from "../config";

const getCooks = async () => {
  const url = config.baseUrl + config.getCooksUrl;
  try {
    return await axios.get(url).then((responce) => {
      console.log(responce);
      return responce;
    });
  } catch (err) {
    console.log(err);
  }
};

export { getCooks };
