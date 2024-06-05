import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Field = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

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
    <Container>
      <FormWrapper>
        <Title>Edit User</Title>
        <form onSubmit={updateUser}>
          <Field>
            <Label>Nama</Label>
            <Input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Name"
            />
          </Field>
          <Field>
            <Label>Jurusan</Label>
            <Input
              type="text"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              placeholder="Jurusan"
            />
          </Field>
          <Button type="submit">Update</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default EditUser;
