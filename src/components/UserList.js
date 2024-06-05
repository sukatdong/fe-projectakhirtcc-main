import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarUser from "./NavbarUser";

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
      await axios.delete(`https://cobalagi-2wy22ihikq-et.a.run.app/mahasiswa/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <NavbarUser/>
        <br></br>
        <br></br>
        
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Waktu Bergabung</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.jurusan}</td>
                <td>{user.createdAt}</td>
                <td>
                  <Link
                    to={`/editUser/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`/addUser`} className="button is-success">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default UserList;