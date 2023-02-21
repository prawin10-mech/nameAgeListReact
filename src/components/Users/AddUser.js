import React, { useState, useRef } from "react";
import Card from "../UI/Card";

import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  // const [nameInput, setNameInput] = useState("");
  // const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  // const nameInputHandler = (e) => {
  //   setNameInput(e.target.value);
  // };

  // const ageInputHandler = (e) => {
  //   setAgeInput(e.target.value);
  // };

  const submitFormHandle = (e) => {
    e.preventDefault();
    const nameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;
    const collegeInput = collegeInputRef.current.value;
    if (
      nameInput.trim().length === 0 ||
      ageInput.trim().length === 0 ||
      collegeInput.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid Name, age and college (non-empty values)",
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
    props.onAddUser(nameInput, ageInput, collegeInput);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
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
          <input type="text" id="userName" ref={nameInputRef} />
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" ref={ageInputRef} />
          <label htmlFor="college">College: </label>
          <input type="text" id="college" ref={collegeInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
