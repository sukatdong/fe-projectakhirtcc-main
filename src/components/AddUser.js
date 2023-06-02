import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();
  

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-ze34kd7dlq-et.a.run.app/mahasiswa", {
        nama,
        jurusan,
        createdAt,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jurusan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jurusan}
                onChange={(e) => setJurusan(e.target.value)}
                placeholder="Jurusan"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;