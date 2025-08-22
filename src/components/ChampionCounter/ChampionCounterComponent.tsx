import { ChampionCounter,Counter,ArenaGodLanding } from "../../styles/styleComponents/ChampionCounterComponent.styles";

type Props={
    topOneCount:number;
};

function ChampionCounterComponent({topOneCount}:Props) {

    return(
        <ChampionCounter>
            <Counter>{topOneCount}</Counter>
            /
            <ArenaGodLanding>60 to get ArenaGod</ArenaGodLanding>
        </ChampionCounter>



    )

}export default ChampionCounterComponent;