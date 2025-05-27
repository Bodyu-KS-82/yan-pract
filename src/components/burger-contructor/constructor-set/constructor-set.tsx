import React, { useState } from 'react';
import styles from './constructor-set.module.css';
import { TIngredient } from '@utils/types.ts';
import {
	ConstructorElement,
	DragIcon,
	CurrencyIcon,
	Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { OrderModal } from '../../modal/order-modal/order-details-modal.tsx';

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
				<div style={{ marginLeft: '24px' }}>
					<ConstructorElement
						type='top'
						isLocked={true}
						text={`${bunType.name} (верх)`}
						price={bunType.price}
						thumbnail={bunType.image}
						style={{ marginLeft: '56px' }}
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
				<div style={{ marginLeft: '24px', marginBottom: '40px' }}>
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
								className='text text_type_main-large'
								style={{
									fontFamily: 'Iceland',
									fontWeight: '400',
									fontSize: '48px',
									lineHeight: '36px',
									letterSpacing: '0%',
									textAlign: 'right',
									verticalAlign: 'middle',
								}}>
								{'610'}
							</p>
							<CurrencyIcon type='primary' />
						</div>
					</div>

					<div style={{ marginLeft: '40px' }} />

					<Button
						htmlType='button'
						type='primary'
						size='medium'
						onClick={() => GetOrder(true)}
						style={{
							width: '215px',
							height: '64px',
							borderRadius: '64px',
							padding: '20px',
							marginRight: '24px',
						}}>
						Оформить заказ
					</Button>
				</div>
			</div>
		);
	};

	return (
		<>
			<Elements />

			<OrderModal
				isOpen={modalInfoOrder}
				isClose={setModalInfoOrder}
				contentText={contentText}
				infoOrder={infoOrder}
			/>
		</>
	);
};
