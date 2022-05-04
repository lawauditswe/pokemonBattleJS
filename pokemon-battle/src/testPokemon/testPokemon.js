import Pokemon from '../gameClasses/pokemonClass';
import { thunderbolt, waterfall } from '../testMoves/testMoves';

export const pikachu = new Pokemon(
	'Pikachu',
	'modest',
	'lightning rod',
	'electric',
	thunderbolt,
	35,
	55,
	40,
	50,
	50,
	90,
	0,
	252,
	4,
	252,
	0,
	0,
	30,
	31,
	31,
	31,
	31,
	31,
	'Male',
	100,
	null,
	25
);

export const dratini = new Pokemon(
	'Dratini',
	'quiet',
	'shed skin',
	'dragon',
	waterfall,
	41,
	64,
	45,
	50,
	50,
	50,
	0,
	252,
	0,
	252,
	4,
	0,
	31,
	31,
	31,
	31,
	31,
	31,
	'Female',
	100,
	null,
	147
);

// pokemon moves should be in an array. instead of in the pokemon class i think.
