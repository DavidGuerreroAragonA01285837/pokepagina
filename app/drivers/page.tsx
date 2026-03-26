import Header from '../components/Headers/innerHeader';
import Footer from '../components/footer';

export default function drivers(){
    return (

        <div className="body_center">
            <div id="header-container" className="header"><Header /></div>
            <h1 className="title">Formula 1 Drivers</h1>
            <div className="center_box">
                <div className="team_card">
                    <div className="team_title">Max Verstappen</div>
                    <img src="https://img.redbull.com/images/c_crop,x_490,y_0,h_1323,w_1059/c_fill,w_400,h_500/q_auto,f_auto/redbullcom/2024/11/24/gbg7kugcblkgrdsuinmc/max-verstappen-las-vegas-gp" className="team_image" />
                </div>
                <div className="team_card">
                    <div className="team_title">Sergio Perez</div>
                    <img src="https://media.gq.com.mx/photos/5fdce39945ab6ba380bf4f97/16:9/w_2560%2Cc_limit/sergio%2520perez-1289781620.jpg" className="team_image" />
                </div>
                <div className="team_card">
                    <div className="team_title">Franco Colapinto</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeSK0AfcrTvc5tRCl-Ync4361mJaw_A9hlg&s" className="team_image" />
                </div>

            </div>
            <div className="footer" id="footer-container"><Footer /></div>
        </div>

    );
}