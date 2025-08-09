import { useEffect, useState } from "react";
import { getAuth } from "../api";
import { User } from "../types/UserType";

export function useFetchUser() {
  const [user, setUser] = useState<User | null>(null);
  const [err,setErr] = useState();
  const [loading,setLoading] = useState<boolean>(false);
  useEffect(() => {
   setLoading(true);
   getAuth().then((data) => {
      setUser(data.data);
   }).catch((error) => {
      setErr(error);
   }).finally(() => {
      setLoading(false);
   });
  }, []);
return { user, loading, err };
}
