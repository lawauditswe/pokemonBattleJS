const stab = (attackingPokemon, move) => {
	if (
		move.typing === attackingPokemon.type1 ||
		move.typing === attackingPokemon.type2
	) {
		return 6144 / 4096;
	}
	return 1;
};

export default stab;
