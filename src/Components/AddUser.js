import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
function AddUser(props) {
  const [getUsername, setUsername] = useState("");
  const [getUserage, setUserage] = useState("");
  const [error, setError] = useState();


  const userHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setUserage(e.target.value);
   
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
 
    if(getUsername.trim().length===0 || getUserage.trim().length===0 ){
       setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).'
       })
       return;
    }
    if( getUserage < 1 ){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (> 1).'
       })
        return;
    }
    const userDate ={
        name:getUsername,
        age:getUserage,
    }
    props.onGettingLists(userDate);
    setUsername('');
    setUserage('');
   
    
  };
  const errorHandler=()=>{
    setError('');
  }
  return (
    <div>
     { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">User Name </label>
        <input
          id="username"
          type="text"
          value={getUsername}
          onChange={userHandler}
        />
        <label htmlFor="age">Age </label>
        <input
          id="age"
          type="number"
          value={getUserage}
          onChange={ageHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}
export default AddUser;
