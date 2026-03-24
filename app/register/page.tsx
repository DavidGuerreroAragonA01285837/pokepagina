"use client";

import Header from '../components/Headers/outerHeader';
import Footer from '../components/footer';
import { useRouter } from "next/navigation";

export default function login(){

    const router = useRouter();
    
    function register(){
    router.push("/teams");
    }

  return (
      <div className="body_center">
        <div id="header-container" className="header"><Header /></div>
        <div className="register_box">
            <div className="register" id="register_form">
                <div className="stack">
                    Register
                    <input type="text" id="name" placeholder="Full Name" required />
                    <input type="email" id="email" placeholder="E-mail" required />
                    <input type="password" id="password" placeholder="Password" required />
                    <input type="password" id="password_confirm" placeholder="Confirm Password" required />
                </div>
                <button onClick={register}>Submit</button>
            </div>
        </div>
        <div className="footer" id="footer-container"><Footer /></div>
    </div>
  )
}