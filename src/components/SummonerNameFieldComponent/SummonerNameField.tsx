import {useState} from "react";
import "../../styles/css/SummonerNameField.css";
import { Search } from "lucide-react";

type Props = {
    onSummonerSet: (summonerName: string) => void;
};

function SummonerNameField({onSummonerSet}:Props) {

    const [summonerName, setSummonerName] = useState("");

    const handleClick = () => {
        onSummonerSet(summonerName);
    };


    return (
        <div className="summonerNameBox">
            <input
                className="inputSummonerName"
                type="text"
                placeholder="Summoner's name ex:DarkPlayer#EUW"
                value={summonerName}
                onChange={(e) => setSummonerName(e.target.value)}
            />
            <button className="searchSummoner" onClick={handleClick}><Search size={18} /></button>
        </div>
    )
}export default SummonerNameField;