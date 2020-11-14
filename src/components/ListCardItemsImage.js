import { useRef } from 'react';
import { Card, Col, Row, Typography, Carousel, Button, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import CardProduct from '../components/CardProduct';

const ListCardItemsImage = () => {

  const { Title } = Typography;
  const refCarousel = useRef();

  const arrowLeft = () => {
    refCarousel.current.prev();
  }

  const arrowRight = () => {
    refCarousel.current.next();
  }

  return (
    <>
      <Card style={{ marginBottom: 20 }}>
        <Row>
          <Col span={6}>
            <div style={{ paddingRight: 25 }}>
              <Title level={3}>Title</Title>
              <div style={{ marginBottom: 20 }}>
                Dolore dolor sint voluptate minim sit officia sit mollit nisi est laborum amet laborum amet. Ut exercitation tempor nisi et esse culpa sunt minim aliqua elit do quis. Ipsum pariatur fugiat excepteur labore exercitation incididunt. Non tempor et sint in nostrud irure anim. Dolore in adipisicing veniam non ipsum ad. Nisi ex anim esse officia ex eu.
              </div>
              <Button type={"primary"}>View All</Button>
            </div>
          </Col>
          <Col span={18}>
            {/* Navigation Button */}
            <div style={{ flexDirection: "column", alignItems: "flex-end", display: "flex", marginBottom: 20 }}>
              <Space size={"small"}>
                <Button onClick={arrowLeft} type={"primary"} icon={<LeftOutlined />} />
                <Button onClick={arrowRight} type={"primary"} icon={<RightOutlined />} />
              </Space>
            </div>

            {/* Carousel */}
            <Carousel ref={refCarousel} dots={false}>
              <div>
                <Row gutter={24}>
                  {
                    [ ...Array(4) ].map((x, i) => (
                      <CardProduct
                        span={6}
                        bordered={true}
                        title={`Item ${i + 1}`}
                      />
                    ))
                  }
                </Row>
              </div>
              <div>
                <Row gutter={24}>
                  {
                    [ ...Array(4) ].map((x, i) => (
                      <CardProduct
                        span={6}
                        bordered={true}
                        title={`Item ${i + 1}`}
                      />
                    ))
                  }
                </Row>
              </div>
            </Carousel>

          </Col>
        </Row>
      </Card>
    </>
  )
}

export default ListCardItemsImage