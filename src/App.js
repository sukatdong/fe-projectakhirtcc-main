import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;