import { pikachu, dratini } from '../testPokemon/testPokemon';
import { thunderbolt, waterfall } from '../testMoves/testMoves';

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
				effectiveness *= 0.5;
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
		} else if (move.typing === 'flying') {
			if (
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'electric'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'fighting' ||
				pokemonTyping[i] === 'bug' ||
				pokemonTyping[i] === 'grass'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'poison') {
			if (pokemonTyping[i] === 'steel') {
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
				pokemonTyping[i] === 'ice' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'dark'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'ground') {
			if (pokemonTyping[i] === 'flying') {
				effectiveness *= 0;
			} else if (pokemonTyping[i] === 'bug' || pokemonTyping[i] === 'grass') {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'poison' ||
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'electric'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'rock') {
			if (
				pokemonTyping[i] === 'fighting' ||
				pokemonTyping[i] === 'ground' ||
				pokemonTyping[i] === 'steel'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'flying' ||
				pokemonTyping[i] === 'bug' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'ice'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'bug') {
			if (
				pokemonTyping[i] === 'fighting' ||
				pokemonTyping[i] === 'flying' ||
				pokemonTyping[i] === 'poison' ||
				pokemonTyping[i] === 'ghost' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'fairy'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'grass' ||
				pokemonTyping[i] === 'psychic' ||
				pokemonTyping[i] === 'dark'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'water') {
			if (
				pokemonTyping[i] === 'water' ||
				pokemonTyping[i] === 'grass' ||
				pokemonTyping[i] === 'dragon'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'ground' ||
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'fire'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'ghost') {
			if (pokemonTyping[i] === 'normal') {
				effectiveness *= 0;
			} else if (pokemonTyping[i] === 'dark') {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'ghost' ||
				pokemonTyping[i] === 'psychic'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'steel') {
			if (
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'water' ||
				pokemonTyping[i] === 'electric'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'ice' ||
				pokemonTyping[i] === 'fairy'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'fire') {
			if (
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'water' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'dragon'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'bug' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'grass' ||
				pokemonTyping[i] === 'ice'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'grass') {
			if (
				pokemonTyping[i] === 'flying' ||
				pokemonTyping[i] === 'poison' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'bug' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'grass' ||
				pokemonTyping[i] === 'dragon'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'ground' ||
				pokemonTyping[i] === 'rock' ||
				pokemonTyping[i] === 'water'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'electric') {
			if (pokemonTyping[i] === 'ground') {
				effectiveness *= 0;
			} else if (
				pokemonTyping[i] === 'grass' ||
				pokemonTyping[i] === 'electric' ||
				pokemonTyping[i] === 'dragon'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'flying' ||
				pokemonTyping[i] === 'water'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'psychic') {
			if (pokemonTyping[i] === 'dark') {
				effectiveness *= 0;
			} else if (
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'psychic'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'fighting' ||
				pokemonTyping[i] === 'poison'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'ice') {
			if (
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'fire' ||
				pokemonTyping[i] === 'water' ||
				pokemonTyping[i] === 'ice'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'flying' ||
				pokemonTyping[i] === 'ground' ||
				pokemonTyping[i] === 'grass' ||
				pokemonTyping[i] === 'dragon'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'dragon') {
			if (pokemonTyping[i] === 'fairy') {
				effectiveness *= 0;
			} else if (pokemonTyping[i] === 'steel') {
				effectiveness *= 0.5;
			} else if (pokemonTyping[i] === 'dragon') {
				effectiveness *= 2;
			}
		} else if (move.typing === 'dark') {
			if (
				pokemonTyping[i] === 'fighting' ||
				pokemonTyping[i] === 'dark' ||
				pokemonTyping[i] === 'fairy'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'ghost' ||
				pokemonTyping[i] === 'psychic'
			) {
				effectiveness *= 2;
			}
		} else if (move.typing === 'fairy') {
			if (
				pokemonTyping[i] === 'poison' ||
				pokemonTyping[i] === 'steel' ||
				pokemonTyping[i] === 'fire'
			) {
				effectiveness *= 0.5;
			} else if (
				pokemonTyping[i] === 'fighting' ||
				pokemonTyping[i] === 'dragon' ||
				pokemonTyping[i] === 'dark'
			) {
				effectiveness *= 2;
			}
		}
	}
};

export default effectiveness;
