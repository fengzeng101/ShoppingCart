import {BASE_URL} from "../common/contants"
import axios from "axios";

const api = axios.create({
    baseURL: `${BASE_URL}`,
  });

  // get the shipping by pass the current basket total
  export const getShippingFee = async (price) => {
    const response = await api.get(`/shipping/${price}`);    
    return response.data;
  };

  // post the basket to server to finish the order
  export const postOrderData = async (data) => {    
    const response = await api.post(`/order/`,data);    
    return response.data;
  };


