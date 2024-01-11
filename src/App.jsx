import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CarProfil } from './pages/CarProfil'
import { Layout } from './Layout'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/carprofil" element={<CarProfil />} />
        </Route>
      </Routes>
    </Router>
  );
}
