import Box from '@material-ui/core/Box'
import '../../App.css';
import { useState } from 'react';

import Pregunta from '../atoms/Pregunta';
import ListaRespuestas from './ListaRespuestas';
import { PreguntaType } from '../../types/quizztypes';

interface Props {
    preguntas: PreguntaType[];
    score: number;
    setScore: (score: number) => void;
    setReset: (time: boolean) => void;
    setMostrarReloj: (mostrar: boolean) => void;
    
}

const BloquePregunta = (props: Props) => {
    const [seleccionada, setSeleccionada] = useState<String>('');
    const [activar, setActivar] = useState<boolean>(false);
    const [preguntaActual, setPreguntaActual] = useState<PreguntaType>(props.preguntas[0]); 
    const [idActual, setIdActual] = useState<number>(0);
    const [finJuego, setFinJuego] = useState<boolean>(false);

    if(activar){
        setActivar(false);
        if(idActual===props.preguntas.length-1){
            if(seleccionada === preguntaActual.correcta){  
                props.setScore(props.score + 1)
            }
            setFinJuego(true);
            props.setMostrarReloj(false);
        }else{
            console.log('Entra activo')
            props.setReset(true);
        if(seleccionada === preguntaActual.correcta){  
            console.log('ACIERTO')
            const nuevoId = idActual + 1;         
            setPreguntaActual(props.preguntas[nuevoId]);
            setIdActual(idActual+1);
            props.setScore(props.score + 1)
            
        }else{
            const nuevoId = idActual + 1;
            setPreguntaActual(props.preguntas[nuevoId]);
            setIdActual(idActual+1);
            console.log('ERROR')   
        }
        }
    }
  

    return (
        <>
        { !finJuego ?  
        <Box
        textAlign='center'
        margin={4}
        padding={5}
        bgcolor='rgba(0, 0, 0, 0.2)'
        border={3}
        borderColor='#DD1E01'
        maxWidth='1000px'
        marginLeft='auto'
        marginRight='auto'
        borderRadius="10px"
        className='pregunta-bg'

        >
        <Pregunta pregunta={preguntaActual.pregunta}/>
        <ListaRespuestas 
        respuestas={preguntaActual.respuestas} 
        setSeleccionada={setSeleccionada}
        setActivar={setActivar}
        />
        </Box> :
        <div>
        Fin Juego </div>
    }</>
    )
}

export default BloquePregunta
