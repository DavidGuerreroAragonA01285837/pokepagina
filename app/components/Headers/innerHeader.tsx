"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function inner_header(){

    const router = useRouter();

    function logOut(){
        router.push("/");
    }

    return (

        <header className="header">
            <img src="https://images.seeklogo.com/logo-png/33/2/formula-1-logo-png_seeklogo-330361.png" className="F1_logo_white"/>
            <Link href="/teams" className="tab_element">Team Page</Link>
            <Link href="/drivers-info" className="tab_element">Driver Page</Link>
            <Link href="/motor-makers-info" className="tab_element">Motor Makers</Link>
            <Link href="/poke-tab" className="tab_element">Pokemon</Link>
            <Link href="/poke-battle" className="tab_element">Battle!</Link>
            <button onClick={logOut} className = "logout_button" id="logout">Logout</button>
        </header>

    );
}