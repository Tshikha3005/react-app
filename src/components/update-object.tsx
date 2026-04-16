import React from "react";
import set from "../../node_modules/@rc-component/util/es/utils/set";

export const UpdateObject = () => {
  const [user, setUser] = React.useState({
    name: "Shikha",
    age: 30,
    city: "New York",
  });

  const updateCity = () => {
    // Why this is happening
    // No — the current approach is not correct.

    // In your updateCity function you do:

    // user.name = "sdf" — this mutates the existing state object
    // setUser({ ...user }) — this creates a new object, but it already contains the mutated name
    // setUser(prevUser => ({ ...prevUser, city: "San Francisco" })) — this updates city as well
    // So both values change because you mutated user first, and then you used that mutated object to derive the next state.
    user.name = "sdf";
    // This will not trigger a re-render because we are mutating the existing object
    // setUser(user); // why it is not working? Because React does a shallow comparison of the state, and since the reference to the user object has not changed, it thinks the state is the same and does not re-render.
    setUser({ ...user });
    // To properly update the city and trigger a re-render, we should create a new object with the updated city
    setUser((prevUser) => ({
      ...prevUser,
      city: "San Francisco",
    }));
  };

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={updateCity}>Move to San Francisco</button>
    </div>
  );
};
