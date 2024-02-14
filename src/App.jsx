import { useState } from 'react';
import './index.css';

// import { useReducer } from 'react';

const App = () => {
	
	// const reducer = (state, action) => {
	// 	if (action.type === 'increment') return { count: state.count + 1 };
	// 	if (action.type === 'desincrement') return { count: state.count - 1 };
	// 	if (action.type === 'reset') return { count: 0 };
	// };
	
	// const [state, dispatch] = useReducer(reducer, { count: 0 });
	const [tache, setTache] = useState('');
	const [data, setData] = useState([]);

	const handleChange = (e) => {
		setTache(e.target.value);
	};

	const handleSubmit = () => {
		if (tache.trim().length === 0) {
			alert('Champ obligatoire 😁');
		} else {
			let newTask = [
				...data,

				{
					id: data.length + 1,
					name: tache,
				},
			];

			setData(newTask);
			setTache('');
		}
	};

	const handelDelete = (id) => {
		let confirme = confirm('Voulez vous vraiment supprimer cette tache ? 🫵🏻');

		if (confirme) {
			let filterData = data.filter((item) => item.id !== id);
			setData(filterData);
		}
	};

	return (
		<>
			<main>
				<h1>Gestion des taches</h1>

				<div>
					<p className='top'>
						<input
							type='text'
							value={tache}
							onChange={handleChange}
							placeholder='Entrez une tache'
						/>
						<button onClick={handleSubmit}>Add</button>
					</p>

					{data.length === 0 ? (
						<p>Aucune Tache 😞 !!!</p>
					) : (
						<ol className='ls'>
							{data.map((item, index) => (
								<li key={index}>
									{item.name}
									<button onClick={() => handelDelete(item.id)}>❌</button>
								</li>
							))}
						</ol>
					)}
				</div>
{/* 
				<h1>
					Function <code>UseReducer</code>
				</h1>

				<p>Compteur: {state.count}</p>

				<button onClick={() => dispatch({ type: 'increment' })}>+</button>
				<button onClick={() => dispatch({ type: 'desincrement' })}>-</button>
				<button onClick={() => dispatch({ type: 'reset' })}>Reset</button> */}
			</main>
		</>
	);
};

export default App;
