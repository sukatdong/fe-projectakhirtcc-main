import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://cobalagi-2wy22ihikq-et.a.run.app/mahasiswa/${id}`, {
        nama,
        jurusan,
        createdAt,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`https://cobalagi-2wy22ihikq-et.a.run.app/mahasiswa/${id}`);
    setNama(response.data.nama);
    setJurusan(response.data.jurusan);
    setCreatedAt(response.data.createdAt);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;