import { Link, useOutletContext } from "react-router-dom";

function UserCard({ user }) {
  // Demo: you can read the full users array here if you ever need it
  const allUsers = useOutletContext();
  console.log("All users in UserCard:", allUsers);

  return (
    <article>
      <h2>{user.name}</h2>
      <p>
        <Link to={`/profile/${user.id}`}>View profile</Link>
      </p>
    </article>
  );
}

export default UserCard;