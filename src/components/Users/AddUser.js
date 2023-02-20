import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAgeInput(e.target.value);
  };

  const submitFormHandle = (e) => {
    e.preventDefault();
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid Name and Age (non-empty values)",
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid Age (non-Negative Age)",
      });
      return;
    }
    props.onAddUser(nameInput, ageInput);
    setAgeInput("");
    setNameInput("");
  };
  const errorHandle = (props) => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandle}>
          <label htmlFor="userName">Name: </label>
          <input
            type="text"
            id="userName"
            onChange={nameInputHandler}
            value={nameInput}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            onChange={ageInputHandler}
            value={ageInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
