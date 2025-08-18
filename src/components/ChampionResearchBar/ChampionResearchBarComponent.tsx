import {Search} from "lucide-react";
import "../../styles/css/ChampionNameField.css";
import {useState} from "react";

type Props = {
    search: string;
    onSearchChange: (value: string) => void;
};

function ChampionResearchBarComponent({search,onSearchChange}:Props){

    return (
        <div className="championNameBox">
            <input
                className="inputChampionName"
                type="text"
                placeholder="Find a champion..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )

}

export default ChampionResearchBarComponent;