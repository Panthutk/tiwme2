import { useState, useEffect, useRef, Component } from "react";
import axios from "axios";
const baseUrl = "http://165.22.3.172:9999/users";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      // history.push("./add")
    }
  }, []);

  // const [post, setPost] = useState(null);
  // useEffect(()=> {
  //     axios.get(baseUrl).then((response) =>{
  //         setPost(response.data);
  //         console.log(response.data)
  //     });
  // }, []);

  // if (!post) return null;
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    console.log(result)
  }

  return (
    <div className="">
      <h1>Hello world</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <br />
      <button onClick={login} className="">
        Login
      </button>
    </div>
  );
};
export default Login;
