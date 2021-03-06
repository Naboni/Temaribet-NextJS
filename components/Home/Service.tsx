import { Button, List, Col, Row } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import ServiceCard from './ServiceCard'

const Service = () => {
  const Natural = ['Math', 'Physics', 'Chemistry', 'Biology']
  const Social = ['History', 'Geography', 'Economics', 'Civics']
  const Technology = [
    'Basic Programming',
    'App Development',
    'Website Development',
  ]
  return (
    <div className="mx-9  lg:mx-20">
      <header className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-[#1A3765] font-bold font-minionPro text-[#1A3765] mb-10 ">Service</header>
      <Row gutter={[0, 24]} justify="space-between">
        <Col xs={24} lg={7} xl={7}>
          <ServiceCard
            title="Natural"
            description="Making software to help you grow traffic, convert more visitors, and run complete inbound"
            subjects={Natural}
          />
        </Col>

        <Col xs={24} lg={7} xl={7}>
          <ServiceCard
            title="Social"
            description="Making software to help you grow traffic, convert more visitors, and run complete inbound"
            subjects={Social}
          />
        </Col>
        <Col xs={24} lg={7} xl={7}>
          <ServiceCard
            title="Technology"
            description="Making software to help you grow traffic, convert more visitors, and run complete inbound"
            subjects={Technology}
          />
        </Col>
      </Row>
    </div>
  )
}
export default Service
