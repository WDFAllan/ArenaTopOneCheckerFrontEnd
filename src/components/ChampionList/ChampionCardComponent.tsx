// src/components/ChampionCardComponent.tsx
import React from "react";
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';


import { ChampionImage, ChampionName } from "../../styles/styleComponents/ChampionList.styles";
import {CardContent, Typography} from "@mui/joy";

type Props = {
    name: string;
    id: number;
    hasWin: boolean;
};

function ChampionCardComponent ({ name, hasWin }:Props)  {
    return (

        <Card color="primary" variant="solid" sx={{width:150}}>
            <AspectRatio variant="plain" minHeight="150px" sx={{borderRadius:'lg'}}>
                <ChampionImage src={`/champions/${name}.jpg`} hasWin={hasWin} />
            </AspectRatio>
            <CardContent>
                <div>
                    <Typography sx={{fontSize:'md',fontWeight:'md'}}><ChampionName>{name}</ChampionName></Typography>
                </div>
            </CardContent>
        </Card>

        // <ChampionCard key={name} >
        //     <ChampionImage src={`/champions/${name}.jpg`} hasWin={hasWin} />
        //     <ChampionName>{name}</ChampionName>
        // </ChampionCard>
    );
}

export default ChampionCardComponent;
