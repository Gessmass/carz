import styled from '@emotion/styled'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { DatePicker, Input, Button, Select, Form } from 'antd'
import moment from 'moment'

const { Option } = Select;

const owners = [
  "Martin", "Sylvie", "Victor", "Denis"
]

export const From = () => {
  const [brand, setBrand] = useState(null)
  const [model, setModel] = useState(null)
  const [year, setYear] = useState(null)
  const [color, setColor] = useState(null)
  const [mileage, setMileage] = useState(null)
  const [version, setVersion] = useState(null)
  const [engine, setEngine] = useState(null)
  const [serialNumber, setSerialNumber] = useState(null)
  const [buyDate, setBuyDate] = useState(null)
  const [owner, setOwner] = useState(null)
  const [horsepower, setHorsepower] = useState(null)
  const [mainCarPicture, setMainCarPIcture] = useState(null)
  const [carId, setCarId] = useState(null)

  const navigate = useNavigate()

  const handleCreateNewCar = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('brand', brand);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('color', color);
    formData.append('mileage', mileage);
    formData.append('version', version);
    formData.append('engine', engine);
    formData.append('serialNumber', serialNumber);
    formData.append('buyDate', buyDate);
    formData.append('owner', owner);
    formData.append('horsepower', horsepower);
    if (mainCarPicture) {
      formData.append('mainCarPicture', mainCarPicture);
    }

    axios.post(`/api/upload/createnewcar/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Car successfully created");
          setBrand(null)
          setBuyDate(null)
          setColor(null)
          setEngine(null)
          setHorsepower(null)
          setMainCarPIcture(null)
          setMileage(null)
          setModel(null)
          setOwner(null)
          setSerialNumber(null)
          setVersion(null)
          setYear(null)
        }
      })
      .catch((error) => {
        console.log("Error when creating a new car", error);
      });
  };

  const handleDate = (date) => {
    if (date) {
      setBuyDate(date.format('DD-MM-YYYY'))
    } else {
      setBuyDate(null)
    }
  }

  return (
    <FormWrapper>
      <FormNewCar onSubmit={handleCreateNewCar} style={{ maxWidth: "50%", margin: "20px" }}>
        <Form.Item rules={{ required: true, message: "Brand Required" }}><Input required type='text' placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} /></Form.Item>
        <Input required type='text' placeholder='Model' value={model} onChange={(e) => setModel(e.target.value)} />
        <InputYear required picker='year' placeholder='Year' onChange={(date) => setYear(date)} />
        <Input required type='text' placeholder='Color' value={color} onChange={(e) => setColor(e.target.value)} />
        <Input required type='text' placeholder='Mileage' value={mileage} onChange={(e) => setMileage(e.target.value)} />
        <Input required type='text' placeholder='Version' value={version} onChange={(e) => setVersion(e.target.value)} />
        <Input type='text' placeholder='Engine' value={engine} onChange={(e) => setEngine(e.target.value)} />
        <Input type='text' placeholder='Serial Number' value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
        <InputDate format='DD/MM/YYYY' placeholder='Buy Date' onChange={(date) => handleDate(date)} />
        <OwnerSelector onChange={(value) => setOwner(value)} />
        <Input type='text' placeholder='Horsepower' value={horsepower} onChange={(e) => setHorsepower(e.target.value)} />
        <SubmitButton type='submit'>Submit</SubmitButton>
        <FileInput
          type='file'
          name='myFile'
          accept='image/jpeg, image/png, image/jpg'
          onChange={(e) => setMainCarPIcture(e.target.files[0])}
        />
      </FormNewCar>
    </FormWrapper>
  )
}

const OwnerSelector = ({ value, onChange }) => (
  <Select
    placeholder="Owner"
    value={value}
    onChange={onChange}
    allowClear
  >
    {owners.map(owner => (
      <Option key={owner} value={owner}>{owner}</Option>
    ))}
  </Select>
);


const InputYear = styled(DatePicker)`
  
`

const InputDate = styled(DatePicker)`
  
`

const FileInput = styled.input`
`

const SubmitButton = styled(Button)`
  background-color: orange;
`

const FormNewCar = styled(Form)`
border: 2px solid lime;
`;

const FormWrapper = styled.div`
`;