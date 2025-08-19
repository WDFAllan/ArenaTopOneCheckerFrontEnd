// src/components/ChampionCardComponent.tsx
import React from "react";
import { ChampionCard, ChampionImage, ChampionName } from "../../styles/styleComponents/ChampionList.styles";

type Props = {
    name: string;
    id: number;
    hasWin: boolean;
};

function ChampionCardComponent ({ name, hasWin }:Props)  {
    return (
        <ChampionCard key={name} >
            <ChampionImage src={`/champions/${name}.jpg`} hasWin={hasWin} />
            <ChampionName>{name}</ChampionName>
        </ChampionCard>
    );
}

export default ChampionCardComponent;
