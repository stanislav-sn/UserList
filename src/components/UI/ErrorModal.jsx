import { Button } from '@mui/material';
import styles from './ErrorModal.module.css';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.closeHandler}></div>;
};

const Modal = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<h2>Некорректный ввод</h2>
			</div>
			<div className={styles.content}>Эти поля не могут быть пустыми</div>
			<Button onClick={props.closeHandler} variant="contained">
				Закрыть
			</Button>
		</div>
	);
};

const ErrorModal = ({ onCloseHandler }) => {
	const closeHandler = () => {
		onCloseHandler = onCloseHandler(false);
	};

	return (
		<>
			{createPortal(
				<Backdrop closeHandler={closeHandler} />,
				document.querySelector('#backdrop')
			)}
			{createPortal(
				<Modal closeHandler={closeHandler} />,
				document.querySelector('#modal')
			)}
		</>
	);
};

export default ErrorModal;
