import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ user }) => {
  return (
    <Link
      className="flex justify-between hover:bg-red-500 duration-200 bg-gray-gradient p-6 rounded-lg space-x-4 items-center"
      to={user.email ? `/Doctors/${user.email}` : ""}
    >
      {/* picture */}
      <img
        className="w-24 h-24 rounded-full"
        src={user.imageUser}
        alt={user.name}
      />
      {/* Info */}
      <div className="flex flex-col items-start space-y-2">
        <h1 className="text-2xl opacity-90 font-semibold text-primary1">
          {user.name}
        </h1>
        <h2 className="text-xl text-accent1 ">{user.specialite}</h2>
      </div>
    </Link>
  );
};

export default Doctor;
