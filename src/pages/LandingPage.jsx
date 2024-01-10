import styled from '@emotion/styled'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const LandingPage = () => {
  const [title, setTitle] = useState("Defaut")

  useEffect(() => {
    axios.get("/")
      .then((res) => {
        setTitle(res)
        console.log("Axios", res.status)
      })
  }, [])


  return (
    <LandingPageWrapper>
      <TitleBackground>
        <CarzTitle>Carz</CarzTitle>
        <ApiTest></ApiTest>
      </TitleBackground>
    </LandingPageWrapper>
  )
}

const ApiTest = styled.p`
  
`

const LandingPageWrapper = styled.div`
`
const TitleBackground = styled.div`
  width: 100%;
  height: 200px;
  background-color: #a87f7f;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CarzTitle = styled.h1`
  color: black;
`