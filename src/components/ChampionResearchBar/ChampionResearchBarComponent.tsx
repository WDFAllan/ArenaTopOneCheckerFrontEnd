import "../../styles/css/ChampionNameField.css";
import Input from '@mui/joy/Input';

type Props = {
    search: string;
    onSearchChange: (value: string) => void;
};

function ChampionResearchBarComponent({search,onSearchChange}:Props){

    return (
        <div className="championNameBox">
            <Input
                placeholder="Find a champion..."
                size="sm"
                color="primary"
                variant="solid"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}

            />
        </div>
    )

}

export default ChampionResearchBarComponent;