import '../../App.css';
import Box from '@material-ui/core/Box';

interface Props {
    score: number;
    
}

const ScoreCard = (props: Props) => {
    return (
        <Box
        width='220px'
        marginLeft='auto'
        marginRight='auto'
        marginTop='60px'
        >
            <h5 className='score'>Puntuación [{props.score}]</h5>
        </Box>
    )
}

export default ScoreCard
