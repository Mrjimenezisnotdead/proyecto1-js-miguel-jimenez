let puntos = 0;

function hacerJuego() {
    for (let i = 0; i < 10; i++) {
        let pregunta = obtenerPregunta(i);
        let respuestaUsuario = prompt("Pregunta " + (i + 1) + ": " + pregunta.pregunta).trim().toLowerCase();
        
        if (respuestaUsuario === pregunta.respuestaCorrecta) {
            puntos += 10;
            alert("¡Increíble! Sumas 10 puntos. Puntuación actual: " + puntos);
        } else {
            alert("Fallaste :( La respuesta correcta era: " + pregunta.respuestaCorrecta + ". Puntuación actual: " + puntos);
        }
    }
    
    alert("El juego terminó, gracias por venir. Tu puntuación final es: " + puntos);
}

function obtenerPregunta(numero) {
    let preguntas = [
        {
            pregunta: "¿Capital de Chile?",
            respuestaCorrecta: "santiago"
        },

        {
            pregunta: "¿Cuál es el río más largo del mundo?",
            respuestaCorrecta: "amazonas"
        },

        {
            pregunta: "¿Cuál es el tercer planeta del sistema solar?",
            respuestaCorrecta: "tierra"
        },

        {
            pregunta: "¿Trago preferido en Argentina?",
            respuestaCorrecta: "fernet"
        },

        {
            pregunta: "¿Cuál es el océano más grande?",
            respuestaCorrecta: "pacífico"
        },

        {
            pregunta: "¿Cuál es el metal más precioso?",
            respuestaCorrecta: "oro"
        },

        {
            pregunta: "¿Cuál es el país más poblado de Latinoamérica?",
            respuestaCorrecta: "brasil"
        },

        {
            pregunta: "¿Cuál es el programa número uno de la televisión humorística?",
            respuestaCorrecta: "el chavo"
        },

        {
            pregunta: "¿Quién pintó la Mona Lisa?",
            respuestaCorrecta: "davinci"
        },

        {
            pregunta: "¿En casa de herrero?",
            respuestaCorrecta: "cuchara de palo"
        }
    ];
    
    return preguntas[numero];
}

hacerJuego();