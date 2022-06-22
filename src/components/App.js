import { useState } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest } from '../actions/users';
import './App.css';
import Form from './Form.jsx';
import UsersList from './UsersList.jsx';

// function* testing() {
//   while(true){
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

function App(props) {
  // const iterator = testing();
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  const {
    getUsersRequest,
    createUserRequest,
    users
  } = props;

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserRequest({ firstName, lastName })

    setFirstName('');
    setLastName('');
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  getUsersRequest();

  return (
    <div className='app'>
      <header>
        <h1>oh hey cuties</h1>
      </header>
      <Form 
        handleSubmit={handleSubmit}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        firstName={firstName}
        lastName={lastName}
      />
      <UsersList users={users} />
    </div>
  );
}

// ({users}) => ({users}) maps state to props
export default connect(({users}) => ({users}), {
  // map dispatch to props
  getUsersRequest,
  createUserRequest
})(App);
