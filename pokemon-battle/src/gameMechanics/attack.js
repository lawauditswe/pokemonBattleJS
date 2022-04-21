import criticalHit from './criticalHit';
import randomNumber from './randomNumber';
import stab from './stab';

const attack = (attackingPokemon, targetPokemon, move) => {
	const level = attackingPokemon.level;
	const power = move.power;
	let offensiveStat;
	let defensiveStat;
	if (move.category === 'physical') {
		const offensiveStat = attackingPokemon.atkStat;
		const defensiveStat = targetPokemon.defStat;
	} else if (move.category === 'special') {
		const offensiveStat = attackingPokemon.spaStat;
		const defensiveStat = targetPokemon.spdStat;
	}

	let damage =
		Math.floor(
			Math.floor(
				Math.floor((2 * level) / 5 + 2) *
					(power * offensiveStat * defensiveStat)
			) / 50
		) + 2; // base damage
	const criticalHitDamage = Math.floor(damage * criticalHit());
	if (criticalHitDamage !== damage) {
		console.log('A critical hit!');
	}
	damage = Math.floor(criticalHitDamage * randomNumber());
	damage = Math.floor(damage * stab());

	if (damage === 0) damage = 1;

	damage = Math.floor(damage * effectiveness(move, targetPokemon));
};

export default attack;
