import React from 'react';
import styles from './order-modal.module.css';
// import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal.tsx';
import DoneIcon from './image/done.svg';

type OrderModalProps = {
	isOpen: boolean;
	isClose: (value: boolean) => void;
	contentText: string;
	infoOrder: unknown[] | unknown;
};

export const OrderModal = ({
	isOpen,
	isClose,
	contentText,
	infoOrder,
}: OrderModalProps) => {
	if (!isOpen) return null; // false не рендерим
	console.log('infoOrder', infoOrder); // будущие данные
	// const styleIdOrder = {
	// 	// fontFamily: 'JetBrains Mono',
	// 	// fontWeight: '700',
	// 	// fontSize: '24px',
	// 	// lineHeight: '30px',
	// 	// letterSpacing: '0%',
	// 	// textAlign: 'center',
	// 	color: '#F2F2F3',
	// };
	// const styleIdOrderTrue = {
	// 	// fontFamily: 'JetBrains Mono',
	// 	// fontWeightt: '400',
	// 	// fontSize: '16px',
	// 	// lineHeight: '24px',
	// 	// letterSpacing: '0%',
	// 	// textAlign: 'center',
	// 	color: '#F2F2F3',
	// };
	const styleIdOrderAnother = {
		// fontFamily: 'JetBrains Mono',
		// fontWeightt: '400',
		// fontSize: '16px',
		// lineHeight: '24px',
		// letterSpacing: '0%',
		// textAlign: 'center',
		color: '#8585AD',
	};

	return (
		<Modal isOpen={isOpen} isClose={isClose} contentText={contentText}>
			<div className='p-4'></div>
			<div className={styles.order_number_first}>
				<p className='text text_type_digits-large'>034536</p>
			</div>
			<div className='p-2'></div>
			<div className={styles.name_text_second}>
				<p
					className='text text_type_main-medium'
					// style={styleIdOrder}
				>
					идентификатор заказа
				</p>
			</div>
			<div
				// className="p-7"
				className={styles.box_next_60}></div>
			<div>
				<img src={DoneIcon} alt='Заказ выполняется' />
			</div>
			<div
				// className="p-7"
				className={styles.box_next_60}></div>
			<div className={styles.name_text_third}>
				<p
					className='text text_type_main-default'
					// style={styleIdOrderTrue}
				>
					Ваш заказ начали готовить
				</p>
			</div>
			<div className='p-2'></div>
			<div className={styles.name_text_fourth}>
				<p className='text text_type_main-default' style={styleIdOrderAnother}>
					Дождитесь готовности на орбитальной станции
				</p>
			</div>

			<div className='p-15'></div>
		</Modal>
	);
};
