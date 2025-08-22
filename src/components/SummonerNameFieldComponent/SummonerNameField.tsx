import {useState} from "react";
import "../../styles/css/SummonerNameField.css";
import { Search } from "lucide-react";
import Input from '@mui/joy/Input';

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
            <Input
                disabled={false}
                placeholder="Summoner's name ex:DarkPlayer#EUW"
                size="lg"
                color="primary"
                variant="solid"
                value={summonerName}
                onChange={(e) => setSummonerName(e.target.value)}
            />

            <button className="searchSummoner" onClick={handleClick}><Search size={18} /></button>
        </div>
    )
}export default SummonerNameField;