import { authKey } from "@/constant/storage-key";
import { setToLocalStorage } from "@/utils/Local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};
