import React from 'react';
import styles from './ingredient-details-info.module.css';
// import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { Modal } from '../modal.tsx';
import { TIngredient } from '../../../utils/types.ts';

type IngredientDetailsInfoProps = {
	isOpen: boolean;
	isClose: (value: boolean) => void;
	contentText: string;
	infoData: TIngredient | null;
};

export const IngredientDetailsInfo = ({
	// isOpen,
	// isClose,
	// contentText,
	infoData,
}: IngredientDetailsInfoProps) => {
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
		<>
			<div className={styles.img_bclock_first}>
				<img
					src={infoData.image_large}
					alt={`${infoData.name}`}
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
		</>
	);
};
