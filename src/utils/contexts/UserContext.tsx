import { createContext } from "react";
import { User } from "../types/UserType"

type UserContextType = {
    user?:User;

}
export const UserContext = createContext<UserContextType>({

})
