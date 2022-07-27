
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
//import Card from './Ui/Card';
import React, { useState } from "react";
const intial_users=[{
  id:1,
  name:'Virat Kohli',
  age:26
},
{ 
  id:2,
  name:'Ms Dhoni',
  age:26
 
}]
function App() {
  const [users, setUsers] = useState(intial_users);

  const addUserhandler = (user)=>{
    setUsers((prevState) => {
      return [user, ...prevState ];
    });

  };
  return (
    <div className="App">
      <AddUser  onAddUser={addUserhandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
