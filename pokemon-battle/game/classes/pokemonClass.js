class Pokemon {
	constructor(
		name,
		nature,
		ability,
		type1,
		move1,
		baseHP,
		baseAtk,
		baseDef,
		baseSpA,
		baseSpD,
		baseSpe,
		hpEVs,
		atkEVs,
		defEVs,
		spaEVs,
		spdEVs,
		speEVs,
		hpIVs,
		atkIVs,
		defIVs,
		spaIVs,
		spdIVs,
		speIVs,
		gender,
		level,
		type2,
		move2,
		move3,
		move4,
		statusCondition
	) {
		this.name = name;
		this.nature = nature;
		this.ability = ability;
		this.type1 = type1;
		this.move1 = move1;
		this.baseHP = baseHP;
		this.baseAtk = baseAtk;
		this.baseDef = baseDef;
		this.baseSpA = baseSpA;
		this.baseSpD = baseSpD;
		this.baseSpe = baseSpe;
		this.hpEVs = hpEVs;
		this.atkEVs = atkEVs;
		this.defEVs = defEVs;
		this.spaEVs = spaEVs;
		this.spdEVs = spdEVs;
		this.speEVs = speEVs;
		this.hpIVs = hpIVs;
		this.atkIVs = atkIVs;
		this.defIVs = defIVs;
		this.spaIVs = spaIVs;
		this.spdIVs = spdIVs;
		this.speIVs = speIVs;
		this.gender = gender;
		this.level = level;
		this.type2 = type2;
		this.move2 = move2;
		this.move3 = move3;
		this.move4 = move4;
		this.statusCondition = statusCondition;
		this.hpStat =
			110 + 2 * this.baseHP + this.hpIVs + Math.floor(this.hpEVs / 4);
		this.atkStat =
			2 * this.baseAtk + 5 + this.atkIVs + Math.floor(this.atkEVs / 4);
		this.defStat =
			2 * this.baseDef + 5 + this.defIVs + Math.floor(this.defEVs / 4);
		this.spaStat =
			2 * this.baseSpA + 5 + this.spaIVs + Math.floor(this.spaEVs / 4);
		this.spdStat =
			2 * this.baseSpD + 5 + this.spdIVs + Math.floor(this.spdEVs / 4);
		this.speStat =
			2 * this.baseSpe + 5 + this.speIVs + Math.floor(this.speEVs / 4);
		this.moveset = [move1, move2, move3, move4];
	}
}

export default Pokemon;
