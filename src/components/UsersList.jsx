const UsersList = ({ users }) => {
    const usersArr = [...users.users];

    return (
        <ul>
        {
          users && usersArr.sort((a, b) => {
            if(a.firstName > b.firstName) {
                return 1;
            } else if (a.firstName < b.firstName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            } else if (a.lastName < b.lastName) {
                return -1;
            } else {
                return 0
            }
          }).map(user => (
            <li key={user.id}>
                <p>{user.firstName} {user.lastName}</p>
                <button>🫥</button>
            </li>
          ))
        }
      </ul>
    )
}

export default UsersList;