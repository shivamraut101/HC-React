import React, { useState, useEffect } from "react";
import { Container, PostCards } from "../components/index";
import appwriteServices from "../appwrite/config";

function AllPosts() {
  const [posts, setPost] = useState([]);

  appwriteServices.listPost([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });

  return (
    <>
      <div className="py-8">
        <Container>
          <div className="py-8">{posts.map((post)=>{
            <div key={post.$id} className="p-2 w-1/4">
                <PostCards post={post} />
            </div>
          })}</div>
        </Container>
      </div>
    </>
  );
}

export default AllPosts;
