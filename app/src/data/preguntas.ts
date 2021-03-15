import { PreguntaType } from '../types/quizztypes';


export const preguntas : PreguntaType[] = [

    {
        id: 1,
        pregunta: "Cuantas vidas pierdes si recibes un Double Strike",
        respuestas: [
            "Pierdes dos vidas",
            "Pierdes una vida y opcionalmente otra",
            "No pierdes vidas. Pierdes 2 marcadores de tu lider",
            "Ganas dos vidas"
        ],
        correcta: "Pierdes dos vidas"
    },
    {
        id: 2,
        pregunta: "Cuándo podemos activar una carta con la habilidad Counter:Attack",
        respuestas: [
            "Justo antes de iniciar nuestro ataque",
            "Después de que el oponente ataque",
            "Al finalizar nuestro ataque",
            "Cuando el oponente finaliza su fase de combo"
        ],
        correcta: "Después de que el oponente ataque"
    },
    {
        id: 3,
        pregunta: "Si la carta tiene Dual Attack, al finalizar el primer ataque...",
        respuestas: [
            "La carta permanece en rest mode",
            "La carta se endereza, pero no puede volver a atacar",
            "La carta permanece en rest mode, pero puede volver a atacar",
            "La carta se endereza y puede volver a atacar una vez más."
        ],
        correcta: "La carta se endereza y puede volver a atacar una vez más."
    }


]

