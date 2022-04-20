// import './App.css';
import React, { useState } from 'react';
import { pikachu, dratini } from './testPokemon/testPokemon';
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
				<Button name='Thunderbolt' />
			</div>
		</div>
	);
}

export default App;
