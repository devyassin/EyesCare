import React from "react";
import Introduction from "./Introduction";
import Form from "./Form";

const Login = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-10">
        <Introduction />
        <Form />
      </div>
      <p class="text-center px-10 md:text-left text-accent1 opacity-80">
        Copyright &copy; 2023 By{" "}
        <a
          href="https://www.linkedin.com/in/yassine-lamouadden/"
          target={"_blank"}
        >
          Yassine Lamouadden
        </a>
         .
      </p>
    </>
  );
};

export default Login;
