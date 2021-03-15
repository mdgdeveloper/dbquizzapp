import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

interface Props {
  respuesta: string;
  setSeleccionada: (estado: string) => void;
  setActivar: (estado: boolean) => void;
}

const Respuesta = (props: Props) => {
  const click = () => {
    props.setSeleccionada(props.respuesta);
    props.setActivar(true);
  };



  return (
    <Box
    marginBottom={2}
    width='800px'
    marginLeft='auto'
    marginRight='auto'
    >
      <Button 
       onClick={click}
       fullWidth={true}
       style={{
        backgroundColor: "rgb(255,96,0,0.8)",
        color: 'white',
        borderWidth: "2px",
        borderColor: "#ff6000",
        borderRadius: "10px",
        height: "60px",
        fontSize: "1.1em",
        textTransform: "none"
      }}
      >
        {props.respuesta}
      </Button>
    </Box>
  );
};

export default Respuesta;
