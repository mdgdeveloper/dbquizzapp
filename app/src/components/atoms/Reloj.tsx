import { useState, useEffect } from "react";

import ProgressBar from './ProgressBar';
import Box from '@material-ui/core/Box';

interface Props {
  reset: boolean;
  setReset: (timeUp: boolean) => void;
  setTimeUp: (timeUp: boolean) => void;
}

const Reloj = (props: Props) => {
  const [currentTime, setCurrentTime] = useState<number>(10);
  const [isReset, setIsReset] = useState<boolean>(false);


  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> | undefined;

    if (!isReset && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
      setIsReset(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isReset, currentTime]);


  useEffect(()=>{
      if(props.reset){
          setIsReset(true);
          setCurrentTime(10);
          props.setReset(false);
      }
  },[props.reset, props])

  return <div>
      <Box
      width='350px'
      marginLeft='auto'
      marginRight='auto'>
      <ProgressBar 
     
      value={currentTime*10}/> 
      </Box>
</div>;
};

export default Reloj;
