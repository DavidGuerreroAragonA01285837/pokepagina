import Header from '../components/Headers/innerHeader';
import Footer from '../components/footer';

export default function Teams(){
    return (

        <div className="body_center">
            <div id="header-container" className="header"><Header /></div>
            <h1 className="title">Formula 1 Teams</h1>
            <div className="center_box">
                <div className="team_card">
                    <div className="team_title">RedBull Racing</div>
                    <img src="https://media.gq.com.mx/photos/696ad78c7c92c52bd303d501/1:1/w_640%2Cc_limit/undefined" className="team_image" />
                </div>
                <div className="team_card">
                    <div className="team_title">Cadillac F1 Team</div>
                    <img src="https://media.gq.com.mx/photos/6989fd12784878ba2d27d413/1:1/w_640%2Cc_limit/undefined" className="team_image" />
                </div>
                <div className="team_card">
                    <div className="team_title">Mercedes AMG Petronas</div>
                    <img src="https://i.guim.co.uk/img/media/229486c6ce67b62c085efcc9b506510474068359/446_0_2107_1686/master/2107.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d51961ef4efb952798cae0574613322a" className="team_image" />
                </div>

            </div>
            <div className="footer" id="footer-container"><Footer /></div>
        </div>

    );
}