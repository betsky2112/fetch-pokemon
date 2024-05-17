/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import PokeItem from './components/PokeItem'

const App = () => {
	const [pokemonList, setPokemonList] = useState([])
	const [selectedPokemonName, setSelectedPokemonName] = useState('')
	const [pokemonDetail, setPokemonDetai] = useState()

	useEffect(() => {})
	fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then((res) => {
		res.json()
			.then((data) => setPokemonList(data.results))
			.catch((err) => console.log(err))
	}, [])

	useEffect(() => {
		if (!selectedPokemonName) return
		fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
			.then((res) => res.json())
			.then((data) => setPokemonDetai(data))
			.catch((err) => console.log(err))
	}, [selectedPokemonName])

	return (
		<div style={styles.container}>
			<h1>Pokemon API</h1>
			<PokeItem
				pokemonList={pokemonList}
				setSelectedPokemonName={setSelectedPokemonName}
			/>
			{pokemonDetail && <p>{pokemonDetail.name}</p>}
		</div>
	)
}

const styles = {
	container: {
		width: '50%',
		margin: '0 auto',
		padding: '80px',
		textAlign: 'center',
	},
}
export default App
