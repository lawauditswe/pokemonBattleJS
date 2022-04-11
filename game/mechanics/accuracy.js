const accuracy = (move) => {
	const miss = Math.floor(Math.random() * 100);
	if (miss > move.accuracy) return 0;
	return 1;
};

export default accuracy;
