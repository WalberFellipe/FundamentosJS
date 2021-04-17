function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade..." + valor);
  }
}

seForVerdadeEuFalo(); //False
seForVerdadeEuFalo(null); //False
seForVerdadeEuFalo(undefined); //False
seForVerdadeEuFalo(NaN); //False
seForVerdadeEuFalo(""); //False
seForVerdadeEuFalo(0); //False
seForVerdadeEuFalo(-1); //True
seForVerdadeEuFalo(" "); //True
seForVerdadeEuFalo("?"); //True
seForVerdadeEuFalo([]); //True
seForVerdadeEuFalo([1, 2]); //True
seForVerdadeEuFalo({}); //True
