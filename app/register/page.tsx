"use client";

import Header from '../components/Headers/outerHeader';
import Footer from '../components/footer';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function register(){

    const router = useRouter();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    
    async function register(){

        if (password == password_confirm){
            const res = await fetch("/API/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: user,
                    password: password,
                    name: name,
                }),
            });

            const result = await res.json();

            if (result.message == "User created successfully"){
                router.push("/teams");
            }
            else{
                alert(result.message);
            }

        }
    }

  return (
      <div className="body_center">
        <div id="header-container" className="header"><Header /></div>
        <div className="register_box">
            <div className="register" id="register_form">
                <div className="stack">
                    Register
                    <input type="text" id="name" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" id="email" placeholder="E-mail" required value={user} onChange={(e) => setUser(e.target.value)}/>
                    <input type="password" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" id="password_confirm" placeholder="Confirm Password" required value={password_confirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                </div>
                <button onClick={register}>Submit</button>
            </div>
        </div>
        <div className="footer" id="footer-container"><Footer /></div>
    </div>
  )
}