import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CarInfosPanel = () => {
  const [carPictures, setCarPictures] = useState([])
  const location = useLocation();
  const car = location?.state?.car;

  useEffect(() => {
    axios.get(`http://localhost:4242/api/car/getallcarpictures`, { params: { carId: car.id } })
      .then((res) => {
        const paths = res.data.map(item => item.path);
        setCarPictures(paths);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <CarInfosPanelWrapper>
      <CarInfos>
        <CarDescription>
          <Info>Brand : {car.brand}</Info>
          <Info>Model : {car.model}</Info>
          <Info>Version : {car.version}</Info>
          <Info>Color : {car.color}</Info>
          <Info>Year : {car.year}</Info>
          <Info>Owner : {car.owner}</Info>
          <Info>Engine : {car.engine}</Info>
          <Info>Mileage : {car.mileage}</Info>
          <Info>Horsepower : {car.horsepower}</Info>
          <Info>Serial Number : {car.serial_number}</Info>
        </CarDescription>
        <CarCarousel>
          <Carousel
            dynamicHeight={false}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            showIndicators
            infiniteLoop
            width={500}
            autoPlay
            interval={4000}>
            {carPictures?.map((picture, index) => (
              <div key={`Carousel top ${index}`}>
                <img src={picture} alt={`Carousel top ${index}`} />
              </div>
            ))}
          </Carousel>
        </CarCarousel>
      </CarInfos>
    </CarInfosPanelWrapper>
  )
}

const Info = styled.h2`
  font-size: 20px;
`

const CarCarousel = styled.div`
  border: 2px solid black;
  aspect-ratio: 16/9;
`

const CarDescription = styled.div`
  height: 100%;
  width: 100%;
`

const CarInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

const CarInfosPanelWrapper = styled.div`
`