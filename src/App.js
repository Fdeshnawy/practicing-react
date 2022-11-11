import React from 'react';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import { useState } from 'react';
function App(props) {
  const [getList,setUsers]= useState([]);
  const onAddUser = (userDate) =>{
    setUsers((prevUserList)=>{
      return [...prevUserList,userDate ]
    })
  };
  return (
    <div>
      <AddUser onGettingLists={onAddUser} />
      <UserList users={getList}/>
    </div>
  );
}

export default App;
