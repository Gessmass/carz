import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import axios from "axios"

export const CarDisplay = ({ brand, model, onClick, carId }) => {
  const [carPicturePath, setCarPicturePath] = useState("")

  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/car/getmainpicture`, {
        params: { carId },
      })
      .then((res) => {
        setCarPicturePath(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <CarDisplayWrapper onClick={onClick}>
      <CarThumbnail src={carPicturePath}></CarThumbnail>
      <CarDescription>
        <Brand>{brand}</Brand>
        <Model>{model}</Model>
      </CarDescription>
    </CarDisplayWrapper>
  )
}

const Model = styled.h3`
  font-size: 20px;
  font-weight: 400;
`

const Brand = styled.h1`
  font-size: 30px;
  font-weight: 700;
`

const CarDescription = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CarThumbnail = styled.img`
  width: 300px;
  aspect-ratio: 16/9;
  object-fit: cover;
`

const CarDisplayWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid grey;
  display: flex;
  background-color: #ffffff;
  transition: 0.2s ease;
  &:hover {
    background-color: white;
    box-shadow: 0px 0px 7px 1px #878787;
    transition: 0.2s ease;
    transform: scale(1.01);
  }
`
