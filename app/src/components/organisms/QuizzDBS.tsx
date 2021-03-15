// React
import { useState, useEffect } from "react";

// Components
import BloquePregunta from "../molecules/BloquePregunta";
import ScoreCard from "./ScoreCard";
import Reloj from "../atoms/Reloj";

// Types
import { PreguntaType } from "../../types/quizztypes";

// Data
// Terminar con services en lugar de importacion directa
import { preguntas } from "../../data/preguntas";

interface Props {}

const QuizzDBS = (props: Props) => {
  const [listaPreguntas, setListaPreguntas] = useState<PreguntaType[]>(
    preguntas
  );
  const [score, setScore] = useState<number>(0);
  const [timeUp, setTimeUp] = useState<boolean>(false);
  const [time, setTime] = useState<number>(5);
  const [reset, setReset] = useState<boolean>(false);
  const [mostrarReloj, setMostrarReloj] = useState<boolean>(true)

  return (
    <div>
      
      { mostrarReloj ? <><ScoreCard score={score} /><Reloj reset={reset} setTimeUp={setTimeUp} setReset={setReset} /></> : <></> }
      <BloquePregunta
        preguntas={listaPreguntas}
        score={score}
        setScore={setScore}
        setReset={setReset}
        setMostrarReloj={setMostrarReloj}
      />
    </div>
  );
};

export default QuizzDBS;
