import { useState } from "react";

export default function Register() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handleInput = (e) => {
    setUserCredentials((prev)=>{return {...prev,[e.target.name]:e.target.value}})
    console.log(userCredentials);
  };
  const handleLogin = (e) => {

    e.preventDefault();
    console.log("clicked");
  };
  return (
    <>
      <div className="w-full h-[100vh-32px] flex justify-center items-center">
        <div className=" border-red-500">
          <div className="font-bold text-white text-center bg-color-1 my-2">
            REGISTER SECTION
          </div>
          <div className="flex gap-2 flex-col">
            <input
              type="text"
              name="name"
              value={userCredentials.name}
              placeholder="Eg:Sudhanshu"
              className="placeholder:mx-2 outline-none focus:ring-2  ring-offset-2 ring-color-2 "
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <input
              type="text"
              name="email"
              value={userCredentials.email}
              placeholder="example@gmail.com"
              className="placeholder:mx-2 outline-none focus:ring-2  ring-offset-2 ring-color-2 "
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="placeholder:mx-2  outline-none focus:ring-2  ring-offset-2 ring-color-2 "
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <button
              className="w-[100%] bg-cyan-200 hover:cursor-pointer active:bg-cyan-300"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
