import React from 'react';
import styles from './burger-constructor.module.css';
import { TIngredient } from '@utils/types.ts';

import { ConstructorSet } from './constructor-set/constructor-set.tsx';

type TBurgerConstructorProps = {
	ingredients: TIngredient[];
	modalInfoOrder: boolean;
	setModalInfoOrder: (value: boolean) => void;
};

export const BurgerConstructor = ({
	ingredients,
	modalInfoOrder,
	setModalInfoOrder,
}: TBurgerConstructorProps): React.JSX.Element => {
	console.log(ingredients);

	return (
		<section className={styles.burger_constructor}>
			<ConstructorSet
				ingredients={ingredients}
				modalInfoOrder={modalInfoOrder}
				setModalInfoOrder={setModalInfoOrder}
			/>
		</section>
	);
};
