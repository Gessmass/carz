import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom';
import { CarInfosPanel } from '../components/carProfil/CarInfosPanel';
import { useRef } from 'react';
import axios from 'axios';

export const CarProfil = () => {

  const fileInputRef = useRef(null)
  const location = useLocation();
  const car = location.state?.car;
  const carId = car.id

  const uploadPicture = async (e) => {
    const picture = e.target.files[0]

    const formData = new FormData()
    formData.append("myFile", picture)
    formData.append("carId", carId);

    try {
      await axios.post(`/api/upload/uploadCarPicture/`, formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      });
      console.log("Image uploaded");
    } catch (err) {
      console.log('Fail uploading an image', err);
    }
  }

  const chartData = {
    labels: ['2021-01-01', '2021-01-02', '2021-01-03'],
    datasets: [
      {
        labels: 'Kilométrage par date',
        data: [120, 190, 300], // Remplacez par les données de kilométrage
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  }

  return (
    <CarProfilWrapper>
      <CarInfosPanel />
      <UploadButton onClick={() => fileInputRef.current.click()}>Upload Button</UploadButton>
      <input
        type="file"
        ref={fileInputRef}
        onChange={uploadPicture}
        style={{ display: "none" }}
      />
    </CarProfilWrapper>
  )
}

export const UploadButton = styled.div`
  border: 1px solid purple;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  cursor: pointer;
`

const CarProfilWrapper = styled.div`
`