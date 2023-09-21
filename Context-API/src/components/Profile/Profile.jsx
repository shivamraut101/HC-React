import React,{useContext} from "react";

import UserContext from "../../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext);
        if (!user) {
          return ( <div>
                <h1>Please Login</h1>
            </div>)
        }
        else{
           return (<h1>Welcome {user.username}</h1>)
        }
        
    
}
export default Profile;