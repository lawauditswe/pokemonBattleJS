const criticalHit = () => {
	crit = Math.floor(Math.random() * 100);

	if (crit % 24 === 0) return 6144 / 4096;
	return 1;
};

export default criticalHit;
