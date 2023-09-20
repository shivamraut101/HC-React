import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {userId} = useParams()
    return(
        <>
        <h1 className="text-xl">User{userId}</h1>
        </>
    )
}

export default User;