import Box from '@material-ui/core/Box';

// Componentes
import Respuesta from '../atoms/Respuesta';

interface Props {
    respuestas: string[];
    setSeleccionada: (estado: string) => void;  
    setActivar: (activo: boolean) => void;  
}

const ListaRespuestas = (props: Props) => {
    return (
        <div>
            {props.respuestas.map( (respuesta,i) => {
                return(
                    <Box>
                    <Respuesta 
                    respuesta={respuesta} 
                    setSeleccionada={props.setSeleccionada} 
                    setActivar={props.setActivar}
                    key={i}/>
                    </Box>
                );
            })}
        </div>
    )
}

export default ListaRespuestas
