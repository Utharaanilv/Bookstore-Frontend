import { Base_Url } from "./BaseUrl";
import { commonApi } from "./CommonApi";
import axios from 'axios';

// add

export const addBooks=async(body,header)=>{
    return await commonApi("POST",`${Base_Url}/add`,body,header)
 }

// get

 export const getAllBooks = async () => {
    try {
      const response = await axios.get(`${Base_Url}/books`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // delete

  export const deleteBooks=async(id)=>{
    return await commonApi("DELETE",`${Base_Url}/delete-books/${id}`,{})
  }

  // edit

  export const editBooks=async(id,body,header)=>{
    return await commonApi("PUT",`${Base_Url}/edit/books/${id}`,body,header)
  }

  // register

  export const registerUser=async(body,header)=>{
    return await commonApi("POST",`${Base_Url}/user/register`,body,header)
}

// login

export const loginUser=async(body,header)=>{
  return await commonApi("POST",`${Base_Url}/user/login`,body,header)
}

