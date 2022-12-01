import axios from 'axios'
import Cookies from "universal-cookie";
const cookies = new Cookies();


async function getToken(){
const token = cookies.get("TOKEN")

      const configuration = {

        method: "get",
        url: "http://192.168.0.103:3000/auth-endpoint",
        headers: {
          Authorization: `Bearer ${token}`,
        },

      };

      const response_user = await axios(configuration)

      return response_user

    }
export default getToken