import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button onClick={props.onClick} type="submit" className={styles.button}>
			Добавить Пользователя
		</button>
	);
};

export default Button;
