"use client";

import Header from './components/Headers/outerHeader';
import Footer from './components/footer';
import { useRouter } from "next/navigation";
import { useState} from "react";

export default function logIn(){
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  
  async function logIn(){
    const res = await fetch("/API/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password
      }),
    });

    const login_data = await res.json();

    if (login_data.user_found && login_data.password_correct){
      router.push("/teams");
    }
  }
  

  return (
      <div className="body_center">
        <div id="header-container" className="outer_header"><Header /></div>
        <div className="login_box">
          <div className="login" id="form">
            <div className="stack">
              Login
              <input type="text" id="username" placeholder="Username or e-mail" required value={user} onChange={(e) => setUser(e.target.value)} />
              <input type="password" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={() =>logIn()}>Submit</button>
            </div>
          </div>
        </div>
        <div className="footer" id="footer-container"><Footer /></div>
      </div>
  )
}