import ChampionList from "./ChampionList/ChampionList";
import "../styles/css/MainPage.css";


function MainPage(){
    return (
        <div className="MainPage">
            <div className="Champion-list">
                <ChampionList/>
            </div>

            <footer>
                <div className="CopyRight">
                    Arena Top 1 Checker
                    © 2025 WDFAllan
                </div>

                <div className="RiotText">
                    Arena Top 1 checker isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot
                    Games
                    anyone officially involved in producing or managing Riot Games properties. Riot Games, and all
                    associated
                    properties are trademarks or registered trademarks of Riot Games, Inc.
                </div>
            </footer>
        </div>
    )
}

export default MainPage;