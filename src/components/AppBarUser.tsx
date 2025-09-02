import { Navigate } from "react-router-dom";
import { userFunc } from "../utils/helpers";
import { useFetchUser } from "../utils/hooks/fetchUser";
import { AppBarStyle, Spinner } from "../utils/styles";
import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

 export const AppBarUser = () =>{
    const {user} = useContext(UserContext);
    
    console.log("User object at appbaruser",user);
    return user ?(
        <AppBarStyle>
        <img src={userFunc(user)} alt={user.username} width={45} height={45} style={{borderRadius:'20%'}}/>
        <h1 style ={{fontSize:'20px'}}>{user.username}</h1>
    </AppBarStyle>
    ) :(<Navigate to="/"/>)
}