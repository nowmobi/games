var textdata = [];

function SG_initLang(lang){
	if( lang == 'es' ){ // es
		textdata[0] = '?OVEJA!';
        textdata[1] = 'PUNTAJE ALTO';
        textdata[2] = 'MODO DIFÍCIL <br />MODO NORMAL <br />MODO FÁCIL';
        textdata[3] = 'Puntaje Alto';
        textdata[4] = 'INTENTAR';
        textdata[5] = '?MÁS FUERTE!';
        textdata[6] = '?Nuevo Record!';
        textdata[7] = 'Anterior Puntaje Alto';
        textdata[8] = 'ERES';
        textdata[9] = 'BUENO';
        textdata[10] = 'Tu puntaje';
	}
	else if( lang == 'pt' ){ // pt
		textdata[0] = 'OVELHA!';
		textdata[1] = 'RECORDE';
		textdata[2] = 'MODO DIFÍCIL <br />MODO NORMAL <br />MODO FÁCIL';
		textdata[3] = 'Recorde';
		textdata[4] = 'TENTE';
		textdata[5] = 'MUITO DIFÍCIL!';
		textdata[6] = 'Novo Recorde!';
		textdata[7] = 'Recorde Anterior';
		textdata[8] = 'VOCÊ\É';
		textdata[9] = 'BOM';
		textdata[10] = 'Seu Recorde';
	}
	else{ // en
		textdata[0] = 'SHEEP!';
		textdata[1] = 'HIGHSCORE';
		textdata[2] = 'HARD MODE <br />NORMAL MODE <br />EASY MODE';
		textdata[3] = 'Highscore';
		textdata[4] = 'TRY';
		textdata[5] = 'HARDER!';
		textdata[6] = 'New Record!';
		textdata[7] = 'Previous Highscore';
		textdata[8] = 'YOU\'RE';
		textdata[9] = 'GOOD';
		textdata[10] = 'Your Score';
	}
}