import styled from '@emotion/styled'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'
import { Layout } from './Layout'

export const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<div>Accueil</div>} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
          </Routes>
        </Layout>
      </Router>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
border: 2px solid red;
`