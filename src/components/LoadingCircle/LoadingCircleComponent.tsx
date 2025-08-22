import {Box, CircularProgress} from "@mui/joy";


function LoadingCircleComponent() {
    return (
        <div className="LoadingCircle">
            <Box>
                <CircularProgress size="md" variant="soft" color="primary" value={72} sx={{
                    "--CircularProgress-trackThickness": "5px"
                }}/>
            </Box>
        </div>

    )


}export default LoadingCircleComponent;