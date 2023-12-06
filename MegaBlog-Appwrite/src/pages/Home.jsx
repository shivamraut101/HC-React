import React,{useState, useEffect} from "react";
import appwriteService from "../appwrite/config"
import { Container, PostCards } from "../components"; 
function Home(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        appwriteService.listPost().then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
    },[])

    if(posts.length === 0){
        return(
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        )
    }else{
        return(
            <div className="w-full py-8">
                <Container>
                    {posts.map((post)=>{
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCards {...post}/>
                        </div>
                    })}
                </Container>
            </div>
        )
    }
}

export default Home