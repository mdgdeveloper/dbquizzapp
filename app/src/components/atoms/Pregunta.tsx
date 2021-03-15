import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";


// TCG Components
import DoubleStrike from "./tcg/DoubleStrike";
import DualAttack from "./tcg/DualAttack";
import CounterAttack from "./tcg/CounterAttack";

import reactStringReplace from "react-string-replace";

interface Props {
  pregunta: string;
}

const Pregunta = (props: Props) => {
  let preguntaFormateada;

  preguntaFormateada = reactStringReplace(
    props.pregunta,
    "Double Strike",
    (_match, _i) => <DoubleStrike />
  );

  preguntaFormateada = reactStringReplace(
    preguntaFormateada,
    "Dual Attack",
    (_match, _i) => <DualAttack />
  );

  preguntaFormateada = reactStringReplace(
    preguntaFormateada,
    "Counter:Attack",
    (_match, _i) => <CounterAttack />
  );

  return (
    <Box padding={5} fontSize={25} 
    bgcolor='rgba(255, 255, 255, 0.4)'
    border={2}
    borderColor='#DD1E01'
    marginBottom={3}
    width='730px'
    marginLeft='auto'
    marginRight='auto'
    
    >
      <Typography
      style={{
fontSize: '0.9em'
      }}
      >
      {preguntaFormateada}
      </Typography>

      
    </Box>
  );
};

export default Pregunta;
