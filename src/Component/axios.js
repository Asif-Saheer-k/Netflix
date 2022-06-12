import axios from 'axios';
import {baseUrl} from './constant/const'
const instance = axios.create({
    baseURL: baseUrl,
    
  });
  export default instance