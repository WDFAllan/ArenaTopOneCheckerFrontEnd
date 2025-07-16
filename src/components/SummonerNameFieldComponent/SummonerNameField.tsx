import {useState} from "react";

type Props = {
    onSummonerSet: (summonerName: string) => void;
};

function SummonerNameField({onSummonerSet}:Props) {

    const [summonerName, setSummonerName] = useState("");

    const handleClick = () => {
        onSummonerSet(summonerName);
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Summoner's name ex:pichuka#EUW"
                value={summonerName}
                onChange={(e) => setSummonerName(e.target.value)}
            />
            <button onClick={handleClick}>Research</button>
        </div>
    )
}export default SummonerNameField;