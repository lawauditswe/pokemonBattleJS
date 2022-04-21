const randomNumber = () => {
	const rand = (100 - Math.floor(Math.random() * 15) + 1) / 100;
	return rand;
};

export default randomNumber;
