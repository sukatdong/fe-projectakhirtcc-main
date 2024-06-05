import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const AppWrapper = styled.div`
  background: linear-gradient(90deg, #FFA500 0%, #FF4500 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} /> 
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
