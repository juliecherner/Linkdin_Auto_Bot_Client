import axios from "axios";

let baseUrl = "https://linkedin-autobot-server.herokuapp.com/";

const ApiHeader = axios.create({
  baseURL: baseUrl,
});

export default ApiHeader;
