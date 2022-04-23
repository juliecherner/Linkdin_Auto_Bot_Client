import axios from "axios";

//let baseUrl = "https://linkedin-autobot-server.herokuapp.com/"


let baseUrl = "http://localhost:8080/";

const ApiHeader = axios.create({
  baseURL: baseUrl,
});

export default ApiHeader;
