import React from 'react';
import { createPortal } from 'react-dom';
import styles from './modal-overlay.module.css';

type ModalOverlayProps = {
	isOpen: boolean;
	isClose: (value: boolean) => void;
};

export const ModalOverlay = ({ isOpen, isClose }: ModalOverlayProps) => {
	if (!isOpen) return null;

	return createPortal(
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
		/>,
		document.getElementById('modal-root')!
	);
};
