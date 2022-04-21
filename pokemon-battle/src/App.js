// import './App.css';
import React, { useState } from 'react';
import { pikachu, dratini } from './testPokemon/testPokemon';
import { thunderbolt, waterfall } from './testMoves/testMoves';
import attack from './gameMechanics/attack';
import Button from './components/Button';

function App() {
	const [yourHP, setyourHp] = useState(pikachu.hpStat);
	const [oppoHP, setOppoHp] = useState(dratini.hpStat);

	return (
		<div className='App'>
			{pikachu.name} vs {dratini.name}
			<div>
				<p>
					{pikachu.name} has {yourHP} HP.
				</p>
				<p>
					{dratini.name} has {dratini.hpStat} HP.
				</p>
				<Button
					name='Thunderbolt'
					move={thunderbolt}
					onClick={() => {
						attack();
					}}
				/>
				<p></p>
				<Button name='Waterfall' move={waterfall} />
			</div>
		</div>
	);
}

export default App;
