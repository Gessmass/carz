import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Page2 } from './pages/Page2'
import { Page1 } from './pages/Page1'
import { Layout } from './Layout'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page1" element={<Page1 />} />
        </Route>
      </Routes>
    </Router>
  );
}
