import React from "react";
import { useSelector } from "react-redux";
import Doctor from "./Doctor";

const Doctors = () => {
  const users = useSelector((state) => state.login.users);

  return (
    <div className="container mt-8 overflow-y-auto h-[500px] grid grid-cols-1  gap-4 md:grid-cols-2   rounded-lg p-6 mx-auto max-w-4xl bg-black-gradient-2 DropShadow py-24">
      {users.map((user, i) => {
        return <Doctor key={i} user={user} />;
      })}
    </div>
  );
};

export default Doctors;
