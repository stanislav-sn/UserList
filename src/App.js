import { useState } from 'react';
import CreateUser from './components/Users/CreateUser';
import UserList from './components/Users/UserList';

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (inputName, inputAge) => {
		setUsers((prevUsers) => {
			const updatedUsers = [...prevUsers];
			updatedUsers.unshift({
				name: inputName,
				age: inputAge,
				id: Math.random().toString(),
			});
			return updatedUsers;
		});
	};
	console.log(users);

	return (
		<div className="App">
			<CreateUser onAddUser={addUserHandler} />
			<UserList usersList={users} />
		</div>
	);
}

export default App;
