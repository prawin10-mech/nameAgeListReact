import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old - {user.college}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
