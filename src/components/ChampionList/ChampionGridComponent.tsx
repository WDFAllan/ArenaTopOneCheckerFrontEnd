// src/components/ChampionGridComponent.tsx
import React from "react";
import { ChampionListWrapper } from "../../styles/styleComponents/ChampionList.styles";
import ChampionCardComponent from "./ChampionCardComponent";

type Champion = {
    id: number;
    name: string;
    imageUrl: string;
    roles: string[];
};

type Props = {
    champions: Champion[];
    championsHasWon: number[];
};

function ChampionGridComponent({ champions, championsHasWon }:Props){
    return (
        <ChampionListWrapper>
            {champions.map((champion) => (
                <ChampionCardComponent
                    key={champion.name}
                    name={champion.name}
                    id={champion.id}
                    hasWin={championsHasWon.includes(champion.id)}
                />
            ))}
        </ChampionListWrapper>
    );
}

export default ChampionGridComponent;
