import {useEffect, useState} from "react";
import axios from "axios";
import SummonerNameField from "./SummonerNameFieldComponent/SummonerNameField"
import "../styles/css/ChampionList.css";
import {
    ChampionCard,
    ChampionImage,
    ChampionListWrapper,
    ChampionName
} from "../styles/styleComponents/ChampionList.styles";

type Champion = {
    id:number;
    name: string;
    imageUrl: string;
    roles: string[];
}

function ChampionList() {

    const apibaseurl = process.env.REACT_APP_API_URL;

    const [summoner, setSummoner] = useState("");

    const [puuid, setPuuid] = useState("");

    const [matchesId, setMatchesId] = useState<string[]> ([]);

    const [championList, setChampionList] = useState<Champion[]>([]);

    const [championHasWon, setChampionHasWon] = useState<number[]>([]);

    useEffect(() => {
        const fetchAllChampionList = async() => {
            try{
                const response = await axios.get(`${apibaseurl}/champions/getAllChampions`);
                const ChampionsList = response.data;
                setChampionList(ChampionsList);

            }catch (err:unknown){
                if (axios.isAxiosError(err)) {
                    const message = err.response?.data?.error?.message || err.message;
                    console.error('Error fetching championList:', message);
                }
            }
        }
    fetchAllChampionList();
    },[])

    useEffect(() => {
        const fetchPuuid = async () =>{
            try{
                const puuidResponse = await axios.get(`${apibaseurl}/arena/summoner`,{
                    params: {summonerName: summoner}
                });
                setPuuid(puuidResponse.data);
            }catch (err:unknown){

            }
        }
        fetchPuuid();
    }, [summoner]);

    useEffect(() => {
        console.log(puuid);
        const fetchMatchesId = async() =>{
            try{

                if(summoner!=""){
                    const response = await axios.get(`${apibaseurl}/arena/lastMatchIds`, {
                        params: {puuid: puuid}
                    });

                    setMatchesId(response?.data);
                }
            }catch (err:unknown){

            }
        }

        fetchMatchesId();
    },[puuid]);

    useEffect(() => {
        const fetchChampionHasWon = async () => {
            try {
                if (matchesId.length > 0) {
                    const response = await axios.post(
                        `${apibaseurl}/arena/hasWonChampionList`,
                        {
                            puuid: puuid,
                            arenaMatchesIds: matchesId,
                        }
                    );
                    setChampionHasWon(response?.data);
                    console.log("Champions avec win :", response.data);
                }
            } catch (err: unknown) {
                console.error(err);
            }
        };
        console.log(matchesId);
        fetchChampionHasWon();
    }, [matchesId]);

    return (
        <div>
            <header className="header">
                <h1 className="title">Arena Top One Checker</h1>
            </header>

            <SummonerNameField onSummonerSet={setSummoner}/>

            <ChampionListWrapper>
                {championList.map((champion) => {

                    const haswin = championHasWon.includes(champion.id);

                    return(
                        <ChampionCard key={champion.name}>
                            <ChampionImage src={`/champions/${champion.name}.jpg`} hasWin={haswin}/>
                            <ChampionName>{champion.name}</ChampionName>
                        </ChampionCard>
                    )
                }



                )}
            </ChampionListWrapper>


        </div>
    )
}
export default ChampionList;