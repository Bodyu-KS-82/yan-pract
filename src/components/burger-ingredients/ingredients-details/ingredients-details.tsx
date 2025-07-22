import React, { useState } from 'react';
import styles from './ingredients-details.module.css';
import { TIngredient } from '@utils/types.ts';
import {
	CurrencyIcon,
	Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientDetailsInfo } from '../ingredients-info/ingredient-details-info.tsx';
import { Modal } from '../../modal/modal.tsx';

type IngredientsDetailsProps = {
	ingredients: TIngredient[];
	modalInfoIngredients: boolean;
	setModalInfoIngredients: (value: boolean) => void;
};

export const IngredientsDetails = ({
	ingredients,
	modalInfoIngredients,
	setModalInfoIngredients,
}: IngredientsDetailsProps) => {
	const [details, setDetails] = useState<TIngredient | null>(null); // передать данные через пропс в Modal
	const contentText = 'Детали ингредиента';

	const GetInfoDetails = (id: string) => {
		if (id) {
			const getInfoIngredient = ingredients.find((detail) => detail._id === id);
			setDetails(getInfoIngredient);
			setModalInfoIngredients(true);
		}
	};

	return (
		<>
			<div className={styles.parent_first}>
				{ingredients.map((ingredient) => (
					<div
						key={ingredient._id}
						className={styles.component_second}
						onClick={() => GetInfoDetails(ingredient._id)}
						role='button'
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								GetInfoDetails(ingredient._id);
							}
						}}>
						<img
							src={ingredient.image}
							alt={ingredient.name}
							className={styles.img_third}
						/>
						<Counter
							count={ingredient.__v === 0 ? 1 : ingredient.__v}
							size='small'
							extraClass='m-1'
							className={styles.counter_fourth}
						/>
						<div className={styles.price_fifth}>
							<p className={styles.price_fifth_p}>{ingredient.price}</p>
							<CurrencyIcon type='primary' />
						</div>

						<div className={styles.ingredient_name}>
							<p className='text text_type_main-default'>{ingredient.name}</p>
						</div>
					</div>
				))}
			</div>

			<Modal
				isOpen={modalInfoIngredients && details !== null}
				isClose={() => {
					setModalInfoIngredients(false);
					setDetails(null);
				}}
				contentText={contentText}>
				{details && (
					<IngredientDetailsInfo
						isOpen={modalInfoIngredients}
						isClose={() => {
							setModalInfoIngredients(false);
							setDetails(null);
						}}
						contentText={contentText}
						infoData={details}
					/>
				)}
			</Modal>
			{/* <Modal modalInfoIngredients={modalInfoIngredients} setModalInfoIngredients = {setModalInfoIngredients} /> */}
		</>
	);
};
