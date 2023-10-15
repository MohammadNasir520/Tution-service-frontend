import { authKey } from "@/constant/storage-key";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/Local-storage";
import { decodeJwtToken } from "@/utils/jwt";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo =()=>{
  const authToken = getFromLocalStorage(authKey)
  if(authToken){
    return decodeJwtToken(authToken)
  } 
  else{
    return ""
  }
}