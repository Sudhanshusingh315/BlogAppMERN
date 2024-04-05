import { Route, Routes } from "react-router-dom";
import "./App.css";
import Entries from "./components/Entries";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./components/CreatePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Entries />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/create" element={<CreatePost/>}/>
          <Route path="/profile" element={<Profile />}/>
          </Route>
        </Route>
        {/* <Route path="/login" element={}/> */}
      </Routes>
    </>
  );
}

export default App;
