import { useState,useEffect } from "react";
import axios from "axios";
const baseUrl = "http://165.22.3.172:9999/users"
export const Login=()=> {
    const [post, setPost] = useState(null);
    useEffect(()=> {
        axios.get(baseUrl).then((response) =>{
            setPost(response.data);
            // console.log(response.data)
        });
    }, []);

    if (!post) return null;

    return(
        <div>
            <h1>{post.age}{post.firstName}</h1>
            <p>{post.lastName}</p>    
        </div>
     );
} 