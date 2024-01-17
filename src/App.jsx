import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { CarProfil } from './pages/CarProfil'
import { PageLayout } from './PageLayout'
import { LandingPage } from './pages/LandingPage'
import { AddCar } from './pages/AddCar'
import { ConfigProvider } from 'antd'
export const App = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          colorPrimaryHover: "black",
        },
        components: {
          Form: {
            colorBgBlur: "red",
          }
        }
      }}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/carprofil/:carId" element={<CarProfil />} />
          <Route path="/addcar" element={<AddCar />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );

}

