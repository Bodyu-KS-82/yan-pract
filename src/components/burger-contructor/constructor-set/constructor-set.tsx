import React, { useState } from 'react';
import styles from './constructor-set.module.css';
import { TIngredient } from '@utils/types.ts';
import {
	ConstructorElement,
	DragIcon,
	CurrencyIcon,
	Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Modal } from '../../modal/modal.tsx';
import { OrderInfo } from '../constructor-info/order-details-info.tsx';

type ConstructorSetProps = {
	ingredients: TIngredient[];
	modalInfoOrder: boolean;
	setModalInfoOrder: (value: boolean) => void;
};

export const ConstructorSet = ({
	ingredients,
	modalInfoOrder,
	setModalInfoOrder,
}: ConstructorSetProps): React.JSX.Element => {
	// const [chooseBun, setChooseBun] = useState<string | null>('643d69a5c3f7b9001cfa093c');
	const bunType = ingredients.find(
		(buns) => buns.type === 'bun' && buns._id === '643d69a5c3f7b9001cfa093c'
	);
	const notBun = ingredients.filter((nBun) => {
		return nBun.type !== 'bun';
	});
	const contentText = ''; // пустой заголовок
	const [infoOrder, setInfoOrder] = useState<[] | unknown>(); // передать данные через пропс в Modal

	const GetOrder = (order: boolean) => {
		if (order) {
			const getInfoOrder = {}; // присвоить данные по Заказу
			setInfoOrder(getInfoOrder);
			setModalInfoOrder(true);
		}
	};

	const Elements = () => {
		return (
			<div className={styles.set_first}>
				<div className={styles.style_ml24}>
					<ConstructorElement
						type='top'
						isLocked={true}
						text={`${bunType.name} (верх)`}
						price={bunType.price}
						thumbnail={bunType.image}
						className={styles.style_ml56}
					/>
				</div>

				<div className={styles.elements_second}>
					{notBun.map((ingredient) => (
						<div key={ingredient._id} className={styles.elements_look_third}>
							<DragIcon type='primary' />
							<ConstructorElement
								key={ingredient._id}
								text={ingredient.name}
								price={ingredient.price}
								thumbnail={ingredient.image}
							/>
						</div>
					))}
				</div>
				<div className={styles.style_ml24_mb40}>
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text={`${bunType.name} (низ)`}
						price={bunType.price}
						thumbnail={bunType.image}
					/>
				</div>

				<div className={styles.element_price_fourth}>
					<div className={styles.element_cost_fifth}>
						<div className={styles.element_cost_sixth}>
							<p
								className={`text text_type_main-large ${styles.style_text_large}`}>
								{'610'}
							</p>
							<CurrencyIcon type='primary' />
						</div>
					</div>

					<div className={styles.style_ml40} />

					<div className={styles.style_button_order}>
						<Button
							htmlType='button'
							type='primary'
							size='large'
							onClick={() => GetOrder(true)}>
							Оформить заказ
						</Button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<Elements />

			<Modal
				isOpen={modalInfoOrder}
				isClose={setModalInfoOrder}
				contentText={contentText}>
				<OrderInfo
					isOpen={modalInfoOrder}
					isClose={setModalInfoOrder}
					contentText={contentText}
					infoOrder={infoOrder}
				/>
			</Modal>
		</>
	);
};
