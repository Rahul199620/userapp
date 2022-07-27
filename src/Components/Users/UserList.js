import React from "react";
import Card from "../../Ui/Card";
import classes from "./UserList.module.css"
function UserList(props) {
    //console.log(props)
    const {users}=props;
    return (
      <Card className={classes.users}>
      <ul>
      {
      users.map(user =><div key={user.id}>
        <li>{`${user.name} is  ${user.age} years old`}</li>
        </div>)
      }
      </ul>
      </Card>
    );
  }

  export default UserList;
  