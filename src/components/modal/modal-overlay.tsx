import React from 'react';
// import { createPortal } from 'react-dom';
import styles from './modal-overlay.module.css';

type ModalOverlayProps = {
	isClose: (value: boolean) => void;
};

export const ModalOverlay = ({ isClose }: ModalOverlayProps) => {
	return (
		<div
			className={styles.parent_first}
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
	);
};
