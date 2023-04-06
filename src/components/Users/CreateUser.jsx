import { useState } from 'react';
import styles from './CreateUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const CreateUser = ({ onAddUser }) => {
	const [inputName, setInputName] = useState('');
	const [inputAge, setInputAge] = useState('');
	const [errorModal, setErrorModal] = useState(false);

	const nameChangeHandler = (event) => {
		setInputName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setInputAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (inputName && inputAge > 0) {
			errorModalHandler(false);
			onAddUser = onAddUser(inputName, inputAge);
		} else {
			errorModalHandler(true);
			console.log('MODAL ERROR');
		}
	};

	const errorModalHandler = (error) => {
		setErrorModal(error);
	};

	return (
		<>
			<Card className={styles.input}>
				<form>
					<label htmlFor="name">Имя</label>
					<input
						id="name"
						type="text"
						value={inputName}
						onChange={nameChangeHandler}
					/>
					<label htmlFor="age">Возраст</label>
					<input
						id="age"
						type="number"
						value={inputAge}
						onChange={ageChangeHandler}
					/>
					<Button onClick={submitHandler} />
				</form>
			</Card>
			{errorModal && <ErrorModal onCloseHandler={errorModalHandler} />}
		</>
	);
};

export default CreateUser;
