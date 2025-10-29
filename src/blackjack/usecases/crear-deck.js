import _ from 'underscore'; 
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */ 
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );;
}