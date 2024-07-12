import axios from "axios";
import { apiURL } from "../constants/utils";

export default axios.create({
    baseURL: apiURL
})