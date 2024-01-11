import styled from '@emotion/styled';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useRef } from 'react';

export const Layout = () => {
  const [imageUrl, setImageUrl] = useState(null)

  const fileInputRef = useRef(null);

  const uploadPicture = async (e) => {
    const picture = e.target.files[0]

    const formData = new FormData()
    formData.append("myFile", picture)

    try {
      const res = await axios.post('/uploadCarPicture', formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })
      console.log("Image uploaded")
    } catch (err) {
      console.log('Fail uploading an image', err)
    }
  }

  return (
    <LayoutWrapper>
      <NavBar>
        <NavButtons>
          <Button><Link to='/carprofil'>Car Profil</Link></Button>
          <Button onClick={() => fileInputRef.current.click()}>Upload Button</Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={uploadPicture}
            style={{ display: "none" }}
          />

        </NavButtons>
      </NavBar>
      <Outlet />
    </LayoutWrapper>
  );
};

const Button = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavButtons = styled.ul`
  display: flex;
  height: 100%;
`

const LayoutWrapper = styled.div`
  border: 2px solid blue;
`;

const NavBar = styled.div`
  background-color: grey;
  height: 50px;
`;

