import React from 'react';
import styles from './ingredient-details-modal.module.css';
// import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal.tsx';

type IngredientDetailsModalProps = {
	isOpen: boolean;
	isClose: (value: boolean) => void;
	contentText: string;
	infoData: unknown[] | unknown;
};

export const IngredientDetailsModal = ({
	isOpen,
	isClose,
	contentText,
	infoData,
}: IngredientDetailsModalProps) => {
	if (!isOpen) return null; // false не рендерим
	console.log('infoData', infoData);

	const textStyleFirst = {
		width: '120px',
		height: '24',
		fontFamily: 'JetBrains Mono',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0%',
		textAlign: 'center',
		color: '#8585AD',
	};

	const textStyleOther = {
		width: '120px',
		height: '24',
		fontFamily: 'JetBrains Mono',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0%',
		textAlign: 'center',
		color: '#8585AD',
	};

	return (
		<Modal isOpen={isOpen} isClose={isClose} contentText={contentText}>
			<div className={styles.img_bclock_first}>
				{/* <div className={styles.img_first}> */}
				<img
					src={infoData.image_large}
					alt={`${infoData}`}
					className={styles.img_second}
				/>
			</div>
			<div className={styles.name_text_third}>
				<p className='text text_type_main-medium'>{infoData.name}</p>
			</div>
			<div style={{ marginBottom: '32px' }}></div>
			<div className={styles.property_values_fourth}>
				<div className={styles.property_item_fifth}>
					<p className='text text_type_main-default' style={textStyleFirst}>
						Калории, ккал
					</p>
					<p className='text text_type_main-default' style={textStyleFirst}>
						{infoData.calories}
					</p>
				</div>
				<div className={styles.property_item_fifth}>
					<p className='text text_type_main-default' style={textStyleOther}>
						Белки, г
					</p>
					<p className='text text_type_main-default' style={textStyleOther}>
						{infoData.proteins}
					</p>
				</div>
				<div className={styles.property_item_fifth}>
					<p className='text text_type_main-default' style={textStyleOther}>
						Жиры, г
					</p>
					<p className='text text_type_main-default' style={textStyleOther}>
						{infoData.fat}
					</p>
				</div>
				<div className={styles.property_item_fifth}>
					<p className='text text_type_main-default' style={textStyleOther}>
						Углеводы, г
					</p>
					<p className='text text_type_main-default' style={textStyleOther}>
						{infoData.carbohydrates}
					</p>
				</div>
			</div>
			<div style={{ marginBottom: '20px' }}></div>
			{/* </div> */}
		</Modal>
	);
};
