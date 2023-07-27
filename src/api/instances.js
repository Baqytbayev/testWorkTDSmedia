import axios from "axios";
import {baseUrl} from "./baseUrl";


export const instances = axios.create({
    baseURL: baseUrl
})