import styled from 'styled-components'

type ChampionImageProps = {
    hasWin: boolean;
}

export const ChampionListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding-top: 20px;
    padding-left: 300px;
    padding-right: 300px;

`;

export const ChampionCard = styled.div`
    background-color: #161f32;
    border-radius: 20px;
    padding: 16px;
    width: 150px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

export const ChampionImage = styled.img<ChampionImageProps>`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 25px;
    filter: ${(props) => (props.hasWin ? 'none' : 'grayscale(100%)')};
    opacity: ${(props) => (props.hasWin ? '1' : '0.5')};
    transition: filter 0.3s ease, opacity 0.3s ease;
`;

export const ChampionName = styled.h3`
  color: white;
  font-size: 1.1rem;
`;