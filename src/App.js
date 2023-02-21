import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge, userCollege) => {
    setUsersList((previousUsersList) => {
      return [
        ...previousUsersList,
        {
          name: username,
          age: userAge,
          id: Math.random().toString(),
          college: userCollege,
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
