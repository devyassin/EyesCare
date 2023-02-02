import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DoctorDetails = () => {
  const users = useSelector((state) => state.login.users);
  const { id } = useParams();

  const currentUser = users.find((user) => {
    if (user.email === id) {
      return user;
    }
  });

  const { email, hopitale, imageUser, mobile, name, specialite, ville } =
    currentUser;

  return (
    <div className="flex flex-col space-y-10">
      <div className="z-[4] bg-profile-background bg-no-repeat bg-cover h-44"></div>
      <div className="flex justify-center">
        <img
          className="w-[300px] h-[300px] rounded-full -translate-y-40 z-[4]"
          src={imageUser}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center space-y-6 -translate-y-40">
        <h1 className="text-6xl font-bold text-accent1">{name}</h1>
        <h2 className="text-3xl  text-gray-300 opacity-50">{specialite}</h2>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between pb-10 container mx-auto px-14">
        {/* part 1 */}
        <div className="flex flex-col space-y-8 items-start">
          {/* item 1 */}
          <div className="flex items-center space-x-2">
            <h2 className="text-3xl text-accent1">Email :</h2>
            <h2 className="text-2xl text-primary1 opacity-80">{email}</h2>
          </div>
          {/* item 2 */}
          <div className="flex items-center space-x-2">
            <h2 className="text-3xl text-accent1">Mobile :</h2>
            <h2 className="text-2xl text-primary1 opacity-80">{mobile}</h2>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex flex-col space-y-8 items-start">
          {/* item 1 */}
          <div className="flex items-center space-x-2">
            <h2 className="text-3xl text-accent1">Hopital :</h2>
            <h2 className="text-2xl text-primary1 opacity-80">{hopitale}</h2>
          </div>
          {/* item 2 */}
          <div className="flex items-center space-x-2">
            <h2 className="text-3xl text-accent1">Ville :</h2>
            <h2 className="text-2xl text-primary1 opacity-80">{ville}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
