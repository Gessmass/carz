import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import { CarDisplay } from "../components/landingPage/CarDisplay"
import { useNavigate } from "react-router-dom"
import BannerImage from "../assets/images/landingPageBanner.png"
import { Divider } from "antd"

export const LandingPage = () => {
  const [cars, setCars] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/car/cars`)
      .then((res) => {
        setCars(res.data)
      })
      .catch((error) => {
        console.log("Error while retreiving the cars list", error)
      })
  }, [])

  const handleSelectCar = (car) => {
    navigate(`/carprofil/${car.id}`, { state: { car } })
  }

  return (
    <LandingPageWrapper>
      <FiltersWrapper>
        <FilterTitle>Filters</FilterTitle>
        <FiltersContainer></FiltersContainer>
      </FiltersWrapper>
      <FilterDivider type="vertical" />
      <CarSelector>
        {cars.map((car, index) => (
          <CarDisplay
            onClick={() => handleSelectCar(car)}
            key={index}
            brand={car.brand}
            model={car.model}
            carId={car.id}
          />
        ))}
      </CarSelector>
    </LandingPageWrapper>
  )
}

const FiltersContainer = styled.div`
  border: 2px solid purple;
  width: 100%;
`

const FilterTitle = styled.h2`
  font-size: 20px;
`

const FilterDivider = styled(Divider)`
  height: 600px;
  background-color: #afafaf9d;
`

const FiltersWrapper = styled.div`
  border: 2px solid lime;
  width: 20%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 6px;
`

const CarSelector = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  z-index: 1;
  flex-direction: column;
  gap: 10px;
`

const LandingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`
