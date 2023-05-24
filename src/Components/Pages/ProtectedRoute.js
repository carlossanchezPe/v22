import { useAuth } from "../../Context/authContext";
import { Navigate } from "react-router-dom";
export function ProtectedRoute({children}){
const {user}=useAuth();
//if(loading)return <h1>loading</h1>
if(!user)return <Navigate to="/login"/>
return <>{children}</>
}