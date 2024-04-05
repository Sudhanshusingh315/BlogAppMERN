import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAuth } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userInfo} = useSelector(state=>state.user);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setUserCredentials((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("userCredentials ",userCredentials);
    dispatch(userAuth(userCredentials));
    console.log("clicked");
  };

  useEffect(()=>{
   if(userInfo){
    navigate("/")
   } 
  })
  return (
    <>
      <div className="w-full h-[100vh-32px] flex justify-center items-center">
        <div className=" border-red-500">
          <div className="font-bold text-white text-center bg-color-1 my-2">
            LOGIN SECTION
          </div>
          <div className="flex gap-2 flex-col">
            <input
              type="text"
              name="email"
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
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
