import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Button, Layout } from "antd"

const { Content } = Layout
export const PageLayout = () => {
  const [pageName, setPageName] = useState("")
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname

    if (path === "/") {
      setPageName("Home")
    } else if (path.startsWith("/carprofil")) {
      setPageName("Car Profil")
    } else if (path === "/addcar") {
      setPageName("Add a new car")
    } else {
      setPageName("Unknown page")
    }
  }, [location.pathname])

  return (
    <>
      <NavBar>
        <LeftNavDiv>
          {location.pathname !== "/" && (
            <ArrowNavbar>
              <Link to="/">Home</Link>
            </ArrowNavbar>
          )}
        </LeftNavDiv>
        <CenterNavDiv>
          <PageName>{pageName}</PageName>
        </CenterNavDiv>
        <RightNavDiv>
          {location.pathname !== "/addcar" && (
            <AddCarButton>
              <Link to="/addcar"> + Add a car</Link>
            </AddCarButton>
          )}
        </RightNavDiv>
      </NavBar>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  )
}

const OutletContainer = styled(Content)`
  border-radius: 6px;
  margin-top: 70px;
  padding: 10px;
`

const PageName = styled.h1`
  color: #e4e4e4;
`

const LeftNavDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`

const RightNavDiv = styled(LeftNavDiv)`
  justify-content: end;
`

const CenterNavDiv = styled(LeftNavDiv)`
  justify-content: center;
`

const AddCarButton = styled(Button)`
  z-index: 1;
  cursor: pointer;
  margin-right: 10px;
`

const ArrowNavbar = styled(Button)`
  cursor: pointer;
  margin-left: 10px;
  z-index: 1;
`

const NavBar = styled.div`
  background-color: #000000;
  display: flex;
  align-items: center;
  height: 70px;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
`
