import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
// import { ingredients } from '@utils/ingredients.ts';
import { getIngredients } from '@components/api/api-Ingredients.tsx';
import { Preloader } from '@components/preloader/preloader.tsx';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients.tsx';
import { BurgerConstructor } from '@components/burger-contructor/burger-constructor.tsx';
import { AppHeader } from '@components/app-header/app-header.tsx';
import { Modal } from '../modal/modal.tsx';

export const App = (): React.JSX.Element => {
	const [ingredients, setIngredients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [modalInfoIngredients, setModalInfoIngredients] = useState(false);
	const [modalInfoOrder, setModalInfoOrder] = useState(false);

	useEffect(() => {
		const getPosts = async () => {
			setLoading(true);
			try {
				const data = await getIngredients();
				setIngredients(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('Неизвестная ошибка');
				}
				console.log('error', err);
			} finally {
				setLoading(false);
			}
		};

		getPosts();
	}, []);

	return (
		<div className={styles.app}>
			<AppHeader />

			<h1
				className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
				Соберите бургер
			</h1>

			{loading && <Preloader />}

			{error && (
				<div>
					<p className='text text_type_main-medium'>Возникла ошика: {error}</p>
				</div>
			)}

			{!loading && !error && (
				<main className={`${styles.main} pl-5 pr-5`}>
					<BurgerIngredients
						ingredients={ingredients}
						modalInfoIngredients={modalInfoIngredients}
						setModalInfoIngredients={setModalInfoIngredients}
					/>
					<BurgerConstructor
						ingredients={ingredients}
						modalInfoOrder={modalInfoOrder}
						setModalInfoOrder={setModalInfoOrder}
					/>
				</main>
			)}

			{modalInfoIngredients && (
				<Modal
					modalInfoIngredients={modalInfoIngredients}
					setModalInfoIngredients={setModalInfoIngredients}
				/>
			)}
		</div>
	);
};

export default App;
