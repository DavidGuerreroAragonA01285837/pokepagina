"use client";

import Header from './components/Headers/outerHeader';
import Footer from './components/footer';
import { useRouter } from "next/navigation";

export default function logIn(){
  
  const router = useRouter();
  
  function logIn(){
    router.push("/teams");
  }
  

  return (
      <div className="body_center">
        <div id="header-container" className="outer_header"><Header /></div>
        <div className="login_box">
          <div className="login" id="form">
            <div className="stack">
              Login
              <input type="text" id="username" placeholder="Username or e-mail" required />
              <input type="password" id="password" placeholder="Password" required />
              <button onClick={logIn}>Submit</button>
            </div>
          </div>
        </div>
        <div className="footer" id="footer-container"><Footer /></div>
      </div>
  )
}