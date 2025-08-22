import styled from 'styled-components'
import { motion } from "framer-motion";

type ChampionImageProps = {
    hasWin: boolean;
}

export const ChampionListWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding-top: 20px;
    padding-left: 300px;
    padding-right: 300px;

`;

export const ChampionImage = styled.img<ChampionImageProps>`
    width: 100%;
    height: 180px;
    object-fit: cover;
    filter: ${(props) => (props.hasWin ? 'none' : 'grayscale(100%)')};
    opacity: ${(props) => (props.hasWin ? '1' : '0.5')};
    transition: filter 0.3s ease, opacity 0.3s ease;
`;

export const ChampionName = styled.h3`
  color: white;
  font-size: 1.1rem;
`;