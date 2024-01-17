import styled from '@emotion/styled'
import { From } from '../components/addCar/Form'

export const AddCar = () => {

  return (
    <>
      <FormContainer><From></From></FormContainer>
    </>
  )
}

const FormContainer = styled.div`
  border: 2px solid red;
  width: 100%;
`