import React from "react";

export const AddUser = ({ add }: { add: (name: string) => void }) => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <h1>Add User</h1>
      {/* Form to add user */}
      <input
        type="text"
        placeholder="Enter user name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          add(name);
          setName("");
        }}
      >
        Add User
      </button>
    </div>
  );
};
