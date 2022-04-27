import { pikachu, dratini } from '../../testPokemon/testPokemon';
import { thunderbolt, waterfall } from '../../testMoves/testMoves';

const effectiveness = (move, targetPokemon) => {
	let pokemonTyping;
	if (targetPokemon.type2) {
		pokemonTyping = [targetPokemon.type1, targetPokemon.type2];
	} else {
		pokemonTyping = [targetPokemon.type1];
	}

	let effectiveness = 1;

	for (let i = 0; i < pokemonTyping.length; i++) {
		if (move.typing === 'normal') {
			if (pokemonTyping[i] === 'ghost') {
				effectiveness *= 0;
			} else if (pokemonTyping[i] === 'rock' || pokemonTyping[i] === 'steel') {
				effectivness *= 0.5;
			}
		} else if (move.typing === 'fighting') {
			if (pokemonTyping[i] === 'ghost') {
				effectiveness *= 0;
			} else if (
				pokemonTyping[i] === 'flying' ||
				pokemonTyping[i] === 'poison' ||
				pokemonTyping[i] === 'bug' ||
				pokemonTyping[i] === 'psychic' ||
				pokemonTyping[i] === 'fairy'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'normal' ||
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'ice' ||
				pokemonTyping[i] === 'dark'
			) {
				effectiveness *= 2;
			}
		}
	}
};

export default effectiveness;
