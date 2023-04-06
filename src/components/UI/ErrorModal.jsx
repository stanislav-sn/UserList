import { Button } from '@mui/material';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ onCloseHandler }) => {
	const closeHandler = () => {
		onCloseHandler = onCloseHandler(false);
	};

	return (
		<div className={styles.backdrop} onClick={closeHandler}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<h2>Некорректный ввод</h2>
				</div>
				<div className={styles.content}>Эти поля не могут быть пустыми</div>
				{/* <button
					className={styles.actions}
					onClick={props.onCloseHandler(false)}
				>
					Закрыть
				</button> */}
				<Button
					onClick={closeHandler}
					// className={styles.actions}
					variant="contained"
				>
					Закрыть
				</Button>
			</div>
		</div>
	);
};

export default ErrorModal;
