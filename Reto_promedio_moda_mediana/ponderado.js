const notes = [
    {
        courses: "Química",
        note: 10,
        credit: 2,
    },
    {
        courses: "Fisica cuántica",
        note: 8,
        credit: 5,
    },
    {
        courses: "Robótica Avanzada",
        note: 7,
        credit: 5,
    },
]

const notesWithCredit = notes.map(
    function (noteObject){
        return noteObject.note * noteObject.credit;
    }
);

const sumNotasWithCredits = notesWithCredit.reduce(
    function (notaAcumulada=0,nota){
        return notaAcumulada + nota;
    }
);

const creditos = notes.map(
    function (creditos){
        return creditos.credit;
    }
);

const sumCreditos = creditos.reduce(
    function(sumacreditos=0,cred){
        return sumacreditos + cred;
    }
);


const promedioPonderadoConCreditos = sumNotasWithCredits/sumCreditos;