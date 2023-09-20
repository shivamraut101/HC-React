import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const userData = useLoaderData()
    // Fetch data by using useState and useEffect
    // const [userData,setData] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res)=> res.json())
    //     .then((res)=> setData(res))

    // },[])
    return(
        <>
           <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6">GitHub User Information</h1>
        {userData.login && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <img
                src={userData.avatar_url}
                alt="User Avatar"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{userData.login}</h2>
              <p className="text-gray-600">@{userData.login}</p>
            </div>
            <div className="col-span-2">
              <div className="mb-4">
                <p className="text-gray-600">Followers: {userData.followers}</p>
                <p className="text-gray-600">Following: {userData.following}</p>
                <p className="text-gray-600">Public Repositories: {userData.public_repos}</p>
                <p className="text-gray-600">Location: {userData.location || 'N/A'}</p>
                <p className="text-gray-600">Email: {userData.email || 'N/A'}</p>
                <p className="text-gray-600">Bio: {userData.bio || 'N/A'}</p>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
        </>
    )
}
export default GitHub;

// fetching data to be used by loader from main.jsx and here useLoaderData
export const githubInfoLoader = async()=>{
 const response = await fetch("https://api.github.com/users/hiteshchoudhary")
 return response.json()
}