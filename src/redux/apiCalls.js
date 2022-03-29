import { publicRequest, userRequest } from "../requestMethod";
import { addCartFailure, addCartStart, addCartSuccess, addProducts } from "./cartRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login',user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailure())
    }
}
export const register=async(dispatch,user)=>{
    
    try{
        const res = await publicRequest.post('/auth/register',user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        console.log(err)
    }
}

export const addCart=async (carts,dispatch)=>{

    dispatch(addCartStart());
  try {
    const res = await userRequest.post(`/carts`, carts);
    dispatch(addCartSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(addCartFailure());
  }
}