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
			<div className={styles.style_mb32}></div>
			<div className={styles.property_values_fourth}>
				<div className={styles.property_item_fifth}>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						Калории, ккал
					</p>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						{infoData.calories}
					</p>
				</div>
				<div className={styles.property_item_fifth}>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						Белки, г
					</p>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						{infoData.proteins}
					</p>
				</div>
				<div className={styles.property_item_fifth}>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						Жиры, г
					</p>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						{infoData.fat}
					</p>
				</div>
				<div className={styles.property_item_fifth}>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						Углеводы, г
					</p>
					<p
						className={`text text_type_main-default ${styles.text_style_other}`}>
						{infoData.carbohydrates}
					</p>
				</div>
			</div>
			<div className={styles.style_mb20}></div>
		</>
	);
};
