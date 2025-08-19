// src/components/ChampionGridComponent.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            <AnimatePresence mode="popLayout">
            {champions.map((champion) => (
                <motion.div
                    key={champion.name}
                    initial={{ opacity: 0.5, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChampionCardComponent
                        key={champion.name}
                        name={champion.name}
                        id={champion.id}
                        hasWin={championsHasWon.includes(champion.id)}

                    />
                </motion.div>
            ))}
            </AnimatePresence>
        </ChampionListWrapper>
    );
}

export default ChampionGridComponent;
