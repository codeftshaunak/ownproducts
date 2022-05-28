import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

function MakeAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://nameless-island-37356.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div>
      <h1 className="text-xl text-center">all users:</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Number</th>
              <th>Email</th>
              <th>Options</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow key={user._id} user={user} index={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MakeAdmin;
