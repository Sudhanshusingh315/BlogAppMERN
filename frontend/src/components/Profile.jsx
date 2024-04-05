import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut=(e)=>{
    // implement logout functionality
    const meow = dispatch(logOut())
    if(meow.payload === "done")
    {
      navigate('/')
    }
  }
  return (
    <>
      <div>
        this is profile section i would like all my posts to here and a logout
        button
      </div>
      <button className="text-black bg-color-1 hover:bg-color-2 focus:ring-2 focus:ring-secondary font-medium rounded-lg text-sm px-4 py-1 " onClick={(e)=>handleLogOut(e)}><Link>Logout</Link></button>
    </>
  );
}
