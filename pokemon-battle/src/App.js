import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

// // import './App.css';
// import React, { useState } from 'react';
// import { pikachu, dratini } from './testPokemon/testPokemon';
// import { thunderbolt, waterfall } from './testMoves/testMoves';
// import attack from './gameMechanics/attack';
// import Button from './components/Button';
// import axios from 'axios';

// function App() {
// 	let image;

// 	const [yourPokemon, setYourPokemon] = useState(pikachu);
// 	const [oppoPokemon, setOppoPokemon] = useState(dratini);

// 	const [yourHP, setyourHP] = useState(pikachu.hpStat);
// 	const [oppoHP, setOppoHP] = useState(dratini.hpStat);

// 	const yourPokemonImage =
// 		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';

// 	const oppoPokemonImage =
// 		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png';

// 	const reduceOppoHP = () => {
// 		const damage = attack(pikachu, dratini, thunderbolt);
// 		setOppoHP(oppoHP - damage);
// 	};

// 	// const fetchPokemonData = () => {
// 	// 	axios
// 	// 		.get('https://pokeapi.co/api/v2/pokemon/?limit=898')
// 	// 		.then(({ data }) => {
// 	// 			image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${yourPokemon.dexNumber}.png`;
// 	// 		});
// 	// };

// 	return (
// 		<div className='App'>
// 			{pikachu.name} vs {dratini.name}
// 			<div>
// 				<div>
// 					<img src={yourPokemonImage} alt='' />
// 				</div>
// 				<p>
// 					{pikachu.name} has {yourHP} HP.
// 				</p>
// 				<div>
// 					<img src={oppoPokemonImage} alt='' />
// 				</div>
// 				<p>
// 					{dratini.name} has {oppoHP} HP.
// 				</p>
// 				{/* <Button
// 					name='Thunderbolt'
// 					func={reduceOppoHP}
// 				/> */}
// 				<button onClick={() => setOppoHP(reduceOppoHP)}>Thunderbolt</button>
// 				<p></p>
// 				{/* <Button name='Waterfall' move={waterfall} /> */}
// 			</div>
// 		</div>
// 	);
// }

// export default App;
