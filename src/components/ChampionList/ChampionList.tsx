import { useEffect, useState } from "react";
import axios from "axios";
import SummonerNameField from "../SummonerNameFieldComponent/SummonerNameField";
import ChampionGridComponent from "./ChampionGridComponent";
import "../../styles/css/ChampionList.css";
import ChampionResearchBarComponent from "../ChampionResearchBar/ChampionResearchBarComponent";
import ChampionCounterComponent from "../ChampionCounter/ChampionCounterComponent";

type Champion = {
    id: number;
    name: string;
    imageUrl: string;
    roles: string[];
};

function ChampionList() {
    const apibaseurl = process.env.REACT_APP_API_URL;

    const [summoner, setSummoner] = useState("");
    const [puuid, setPuuid] = useState("");
    const [matchesId, setMatchesId] = useState<string[]>([]);
    const [championList, setChampionList] = useState<Champion[]>([]);
    const [championHasWon, setChampionHasWon] = useState<number[]>([]);
    const [championName, setChampionName] = useState("");

    useEffect(() => {
        const fetchAllChampionList = async () => {
            try {
                const response = await axios.get(`${apibaseurl}/champions/getAllChampions`);
                setChampionList(response.data);
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    const message = err.response?.data?.error?.message || err.message;
                    console.error("Error fetching championList:", message);
                }
            }
        };
        fetchAllChampionList();
    }, []);

    useEffect(() => {
        const fetchPuuid = async () => {
            try {
                const puuidResponse = await axios.get(`${apibaseurl}/arena/summoner`, {
                    params: { summonerName: summoner },
                });
                setPuuid(puuidResponse.data);
            } catch {}
        };
        fetchPuuid();
    }, [summoner]);

    useEffect(() => {
        const fetchMatchesId = async () => {
            try {
                if (summoner !== "") {
                    const response = await axios.get(`${apibaseurl}/arena/lastMatchIds`, {
                        params: { puuid: puuid },
                    });
                    setMatchesId(response?.data);
                }
            } catch {}
        };
        fetchMatchesId();
    }, [puuid]);

    useEffect(() => {
        const fetchChampionHasWon = async () => {
            try {
                if (matchesId.length > 0) {
                    const response = await axios.post(`${apibaseurl}/arena/hasWonChampionList`, {
                        puuid: puuid,
                        arenaMatchesIds: matchesId,
                    });
                    setChampionHasWon(response?.data);
                }
            } catch (err: unknown) {
                console.error(err);
            }
        };
        fetchChampionHasWon();
    }, [matchesId]);

    const filteredChampions = championList.filter((champion) =>
        champion.name.toLowerCase().startsWith(championName.toLowerCase())
    );

    return (
        <div>
            <header className="header">
                <h1 className="title">Arena Top One Checker</h1>
            </header>

            <SummonerNameField onSummonerSet={setSummoner} />
            <ChampionCounterComponent topOneCount={championHasWon.length} />
            <ChampionResearchBarComponent search={championName} onSearchChange={setChampionName}/>

            <ChampionGridComponent champions={filteredChampions} championsHasWon={championHasWon} />
        </div>
    );
}
export default ChampionList;