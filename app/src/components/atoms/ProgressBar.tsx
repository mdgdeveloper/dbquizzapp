import LinearProgress  from "@material-ui/core/LinearProgress";
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';


const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 20,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);


interface Props {
  value: number;
}

const ProgressBar = (props: Props) => {
  return <BorderLinearProgress variant="determinate" value={props.value} />;
};

export default ProgressBar;
