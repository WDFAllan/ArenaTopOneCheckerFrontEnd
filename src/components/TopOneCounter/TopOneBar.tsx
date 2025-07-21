import "../../styles/css/TopOneBar.css";

type Props = {
    topOneCount: number;
    championCount: number;
};

function TopOneBar({topOneCount, championCount}: Props) {



    function countToPurcent(topOneCount: number, championCount: number) {
        return (topOneCount/championCount)*100;
    }

    return (
        <div className="topOneBarWrapper">
            <div className="topOneBar">
                <div className="topOneProgress" style={{width: `${countToPurcent(topOneCount, championCount)}%`}}>
                    {topOneCount !== 0 && topOneCount}
                </div>
                <div className="palier-line god"></div>
            </div>


            <div className="progress-markers">
                <div className="marker god">60</div>
                <div className="marker max">171</div>
            </div>
        </div>
    )

}

export default TopOneBar;