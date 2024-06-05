import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
  background: linear-gradient(90deg, #0072ff 0%, #00c6ff 100%);
  padding: 1rem;
  border-radius: 10px; /* Tambahkan border-radius di sini */
`

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

const NavbarItem = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`

const NavbarUser = () => {
  return (
    <Navbar role="navigation" aria-label="main navigation">
      <NavbarBrand>
        <NavbarItem>Daftar Member Perpustakaan</NavbarItem>
      </NavbarBrand>
    </Navbar>
  )
}

export default NavbarUser
