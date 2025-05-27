import React, { useState } from 'react';
import styles from './burger-ingredients.module.css';
import { TIngredient } from '@utils/types.ts';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientsDetails } from './ingredients-details/ingredients-details.tsx';

type TBurgerIngredientsProps = {
	ingredients: TIngredient[];
	modalInfoIngredients: boolean;
	setModalInfoIngredients: (value: boolean) => void;
};

export const BurgerIngredients = ({
	ingredients,
	modalInfoIngredients,
	setModalInfoIngredients,
}: TBurgerIngredientsProps): React.JSX.Element => {
	console.log(ingredients);

	const [activeTab, setActiveTab] = useState('bun');

	// Проверка типа ingredients
	// console.log('Ingredients for details', ingredients);

	const filterIngredients = (type: string) => {
		return ingredients.filter((ingred) => {
			return ingred.type === type;
		});
	};

	return (
		<section className={styles.burger_ingredients}>
			<nav>
				<ul className={styles.menu}>
					<Tab
						value='bun'
						active={activeTab === 'bun'}
						onClick={() => {
							setActiveTab('bun');
						}}>
						Булки
					</Tab>
					<Tab
						value='main'
						active={activeTab === 'main'}
						onClick={() => {
							setActiveTab('main');
						}}>
						Начинки
					</Tab>
					<Tab
						value='sauce'
						active={activeTab === 'sauce'}
						onClick={() => {
							setActiveTab('sauce');
						}}>
						Соусы
					</Tab>
				</ul>
			</nav>

			<div className={styles.ingredientsList}>
				<IngredientsDetails
					ingredients={filterIngredients(activeTab)}
					modalInfoIngredients={modalInfoIngredients}
					setModalInfoIngredients={setModalInfoIngredients}
				/>
			</div>
		</section>
	);
};
