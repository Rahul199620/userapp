import React, { useState } from "react";
import Button from "../../Ui/Button";
import Card from "../../Ui/Card";
//import classes from "./Card.module.css"
import classes from "./AddUser.module.css"
import ErrorModel from "./ErrorModel";
const AddUser=(props)=> {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const  NameHandler=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }
    const  AgeHandler=(event)=>{
        console.log(event.target.value);
        setAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
   const  AddHandler=(event)=>{
    event.preventDefault();
    if(name.trim().length===0 || age.trim().length===0){
        setError({
            title:"invalid input",
            message:"please enter valid age and name"
        });
        return;
    }
    if(age < 1){
        setError({
            title:"invalid input",
            message:"please enter valid positive age"
        });
        return;
    }
    const newUser ={
      id:Math.random().toString(),
      name:name,
      age:age,
    }
    console.log(newUser);
    props.onAddUser(newUser);
    setName("");
    setAge("");
   }
    return (
        <div>{error &&(
            <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>
        )}  
        <Card className={classes.input}>
        <form onSubmit={AddHandler}>
          <label htmlFor="userName">User Name</label>
          <input id="userName" type="text" value={name}  onChange={NameHandler} />
          <label htmlFor="number">Age</label>
          <input id="number" type="number"  value={age} onChange={AgeHandler}/>
          <Button type="submit">Add</Button>
        </form>
        </Card>
        </div>  
    );
  }
  
  export default AddUser;
  