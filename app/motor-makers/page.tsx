import Header from '../components/Headers/innerHeader';
import Footer from '../components/footer';

export default function motor_makers(){
    return (
        <div className="body_center">
            <div id="header-container" className="header"><Header /></div>
            <h1 className="title">Formula 1 Motor Makers</h1>
            <div className="center_box">
                <div className="team_card">
                    <div className="team_title">RedBull Ford PowerTrains</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8jjqivYxglv80Ubt9hRE61efUEv7lgdclw&s" className="team_image" />
                </div>
                <div className="team_card">
                    <div className="team_title">Ferrari</div>
                    <img src="https://i.etsystatic.com/50799251/r/il/8c4ee5/7198974898/il_fullxfull.7198974898_mc15.jpg" className="team_image" />
                </div>
                <div className="team_card">
                    <div className="team_title">Mercedes AMG Petronas</div>
                    <img src="https://media.licdn.com/dms/image/v2/D4E0BAQFDG9rw9jG8eg/company-logo_200_200/B4EZfvRQZFHsAM-/0/1752065973358/mercedes_amg_high_performance_powertains_logo?e=2147483647&v=beta&t=M3ivIicTtLWffPK3VAaPKRz-mrXWaTSok1raVuvbdTQ" className="team_image" />
                </div>

            </div>
            <div className="footer" id="footer-container"><Footer /></div>
        </div>
    );
}