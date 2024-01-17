import styled from "@emotion/styled"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {
  DatePicker,
  Input,
  Button,
  Select,
  Form,
  Upload,
  Space,
  Divider,
  Row,
  Col,
} from "antd"
import { UploadOutlined } from "@ant-design/icons"

const { Option } = Select

const owners = ["Martin", "Sylvie", "Victor", "Denis"]
const allStatus = [
  "Just bought",
  "Export Park",
  "Arrived",
  "In Le Havre Harbour",
  "Received",
  "In transit",
  "In use",
]

export const From = () => {
  const [brand, setBrand] = useState()
  const [model, setModel] = useState()
  const [year, setYear] = useState()
  const [color, setColor] = useState()
  const [mileage, setMileage] = useState()
  const [version, setVersion] = useState()
  const [engine, setEngine] = useState()
  const [serialNumber, setSerialNumber] = useState()
  const [buyDate, setBuyDate] = useState()
  const [owner, setOwner] = useState()
  const [horsepower, setHorsepower] = useState()
  const [mainCarPicture, setMainCarPIcture] = useState()
  const [carId, setCarId] = useState()

  const navigate = useNavigate()

  const handleCreateNewCar = (values) => {
    const formData = new FormData()
    formData.append("brand", values.brand)
    formData.append("model", values.model)
    formData.append("year", values.year)
    formData.append("color", values.color)
    formData.append("mileage", values.mileage)
    formData.append("version", values.version)
    formData.append("engine", values.engine)
    formData.append("serialNumber", values.serialNumber)
    formData.append("buyDate", buyDate)
    formData.append("owner", values.owner)
    formData.append("horsepower", values.horsepower)
    if (mainCarPicture) {
      formData.append("mainCarPicture", values.mainCarPicture)
    }

    axios
      .post(`/api/upload/createnewcar/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCarId(res.data.carId)
          console.log("Car successfully created")
          setBuyDate()
        }
      })
      .catch((error) => {
        console.log("Error when creating a new car", error)
      })
  }

  return (
    <FormWrapper>
      <FormNewCar
        onFinish={handleCreateNewCar}
        size="medium"
        layout="horizontal"
        wrapperCol={{
          span: 12,
        }}
        labelCol={{
          span: 10,
        }}
      >
        <Row gutter={6}>
          <Col span={10}>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: "Brand Required" }]}
            >
              <Input type="text" placeholder="Brand" value={brand} />
            </Form.Item>
            <Form.Item
              name="model"
              label="Model"
              rules={[{ required: true, message: "Model Required" }]}
            >
              <Input type="text" placeholder="Model" value={model} />
            </Form.Item>
            <Form.Item label="Version" name="version">
              <Input type="text" placeholder="Version" value={version} />
            </Form.Item>
            <Form.Item
              name="year"
              label="Year"
              rules={[{ required: true, message: "Year Required" }]}
            >
              <DatePicker required picker="year" placeholder="Year" />
            </Form.Item>

            <Form.Item
              name="color"
              label="Color"
              rules={[{ required: true, message: "Color Required" }]}
            >
              <Input type="text" placeholder="Color" value={color} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="mileage"
              label="Mileage"
              rules={[{ required: true, message: "Mileage Required" }]}
            >
              <Input type="number" placeholder="Mileage" value={mileage} />
            </Form.Item>
            <Form.Item label="Engine Type" name="engine">
              <Input type="text" placeholder="Engine" value={engine} />
            </Form.Item>
            <Form.Item label="Serial Number" name="serialNumber">
              <Input
                type="text"
                placeholder="Serial Number"
                value={serialNumber}
              />
            </Form.Item>

            <Form.Item label="Horsepower" name="horsepower">
              <Input
                type="number"
                placeholder="Horsepower"
                value={horsepower}
              />
            </Form.Item>
            <Form.Item label="Main picture" name="picture">
              <Upload name="upload" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Add photo</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row gutter={6}>
          <Col span={10}>
            <Form.Item
              name="owner"
              label="Owner"
              rules={[{ required: true, message: "Owner Required" }]}
            >
              <OwnerSelector />
            </Form.Item>
            <Form.Item
              name="buyingDate"
              label="Buying Date"
              rules={[{ required: true, message: "Buying date Required" }]}
            >
              <DatePicker
                format="DD-MM-YYYY"
                placeholder="Buy Date"
                onChange={(date, dateString) => setBuyDate(dateString)}
              />
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: "Status Required" }]}
            >
              <StatusSelector />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="secondary" htmlType="reset" value="Reset">
                  Reset form
                </Button>
                <Button type="primary" htmlType="submit">
                  Add a car
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </FormNewCar>
    </FormWrapper>
  )
}

const OwnerSelector = ({ value, onChange }) => (
  <Select placeholder="Owner" value={value} onChange={onChange} allowClear>
    {owners.map((owner) => (
      <Option key={owner} value={owner}>
        {owner}
      </Option>
    ))}
  </Select>
)

const StatusSelector = ({ value, onChange }) => (
  <Select placeholder="Status" value={value} onChange={onChange} allowClear>
    {allStatus.map((status) => (
      <Option key={status} value={status}>
        {status}
      </Option>
    ))}
  </Select>
)

const FormNewCar = styled(Form)`
  border: 2px solid lime;
`

const FormWrapper = styled.div``
