import criticalHit from './criticalHit';
import randomNumber from './randomNumber';
import stab from './stab';
import effectiveness from './effectiveness';

const attack = (attackingPokemon, targetPokemon, move) => {
	const level = attackingPokemon.level;
	const power = move.power;
	let offensiveStat;
	let defensiveStat;
	if (move.category === 'physical') {
		offensiveStat = attackingPokemon.atkStat;
		defensiveStat = targetPokemon.defStat;
	} else if (move.category === 'special') {
		offensiveStat = attackingPokemon.spaStat;
		defensiveStat = targetPokemon.spdStat;
	}

	let damage =
		Math.floor(
			Math.floor(
				Math.floor((2 * level) / 5 + 2) *
					((power * offensiveStat) / defensiveStat)
			) / 50
		) + 2; // base damage

	console.log(`Console log 1: ${damage}`);
	const criticalHitDamage = Math.floor(damage * criticalHit());
	if (criticalHitDamage !== damage) {
		console.log('A critical hit!');
	}
	damage = Math.floor(criticalHitDamage * randomNumber());

	console.log(`Console log 2: ${damage}`);

	damage = Math.floor(damage * stab(attackingPokemon, move));

	console.log(`Console log 3: ${damage}`);

	if (damage === 0) damage = 1;

	console.log(`Console log 4: ${damage}`);

	damage = Math.floor(damage * effectiveness(move, targetPokemon));

	console.log(`Console log 5: ${damage}`);

	return damage;
};

export default attack;
