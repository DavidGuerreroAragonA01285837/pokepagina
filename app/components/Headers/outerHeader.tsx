import Link from "next/link";

export default function outer_header(){
    return (
        <div className="outer_header">
            <img src="https://images.seeklogo.com/logo-png/33/2/formula-1-logo-png_seeklogo-330361.png" className="F1_logo_white" />
            <Link className="tab_element_right_menu" href="/">Login</Link>
            <Link className="tab_element_right_menu" href="/register">Register</Link>
        </div>
    );
}