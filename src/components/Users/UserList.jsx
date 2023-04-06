import styles from './UserList.module.css';

const UserList = (props) => {
	return (
		<ul className={styles.users}>
			{props.usersList.map((user) => (
				<li key={user.id}>
					{user.name} - {user.age} лет
				</li>
			))}
		</ul>
	);
};

export default UserList;
