import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type ModalProps = {
	isOpen: boolean;
	isClose: (value: boolean) => void;
	contentText: string;
	children: React.ReactNode;
};

export const Modal = ({
	isOpen,
	isClose,
	contentText,
	children,
}: ModalProps) => {
	useEffect(() => {
		if (!isOpen) return;

		const keyDownEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				isClose(false);
			}
		};

		window.addEventListener('keydown', keyDownEscape);

		return () => {
			window.removeEventListener('keydown', keyDownEscape);
		};
	}, [isClose, isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<>
			<div
				className={styles.modalWrapper_first}
				role='dialog'
				aria-modal='true'>
				<div className={styles.child_title_second}>
					<p className='text text_type_main-large title_third'>
						{contentText || ''}
					</p>
					<CloseIcon
						type='primary'
						style={{ width: '24px', height: '24px' }}
						onClick={() => isClose(false)}
					/>
				</div>

				{children}
			</div>

			<div
				className={styles.overlay_third}
				onClick={() => isClose(false)}
				role='button'
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						isClose(false);
					}
				}}
			/>
		</>,
		document.getElementById('modal-root')!
	);
};
