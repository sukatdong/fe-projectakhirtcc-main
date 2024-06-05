import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarUser from "./NavbarUser";
import { confirmAlert } from "react-confirm-alert"; // Import library
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => (props.variant === 'edit' ? '#17a2b8' : props.variant === 'delete' ? '#dc3545' : '#28a745')};

  &:hover {
    background-color: ${(props) => (props.variant === 'edit' ? '#138496' : props.variant === 'delete' ? '#c82333' : '#218838')};
  }
`;

const AddButton = styled(Link)`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://cobalagi-2wy22ihikq-et.a.run.app/mahasiswa");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      confirmAlert({
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this user?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              await axios.delete(`https://cobalagi-2wy22ihikq-et.a.run.app/mahasiswa/${id}`);
              getUsers();
            }
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ]
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <NavbarUser />
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>No</TableHeader>
              <TableHeader>Nama</TableHeader>
              <TableHeader>Jurusan</TableHeader>
              <TableHeader>Waktu Bergabung</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.nama}</TableCell>
                <TableCell>{user.jurusan}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell>
                  <Link to={`/editUser/${user.id}`}>
                    <Button variant="edit">Edit</Button>
                  </Link>
                  <Button onClick={() => deleteUser(user.id)} variant="delete">
                    Delete
                  </Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <AddButton to={`/addUser`}>Add New</AddButton>
      </TableWrapper>
    </Container>
  );
};

export default UserList;
