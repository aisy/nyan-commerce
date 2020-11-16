import { Row, Col, Card, List, Select, Button, Menu, Space } from 'antd';
import SearchLayout from '../layouts/SearchLayout';
import CardProduct from '../components/CardProduct';


const SearchPage = () => {

  const { Option } = Select;

  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];

  return (
    <div>
      <SearchLayout>
        <div style={{ marginTop: 100, marginBottom: 40 }}>
          <Row>
            <Col span={6} style={{ marginBottom: 40 }}>
              <Card>
                <h1>Filter</h1>
              </Card>
            </Col>
            <Col span={17} offset={1}>
              <Card>
                <div style={{ display: "flex", alignContent: "space-between", justifyContent: "space-between", marginBottom: 20 }}>
                  <div>Display 1-50 item from 100 indexing</div>
                  <div>
                    <Space size={"middle"}>
                      <div>Sort by :</div>
                      <Select defaultValue={"featured"} style={{ width: 180 }}>
                        <Option value={"featured"}>Featured</Option>
                        <Option value={"high-price"}>Price : High to Low</Option>
                        <Option value={"low-price"}>Price Low to High</Option>
                      </Select>
                    </Space>
                  </div>
                </div>
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={data}
                  pagination
                  renderItem={
                    (item, key) => (
                      <List.Item>
                        {/* <Card key={key}>Card Content</Card> */}
                        <CardProduct bordered />
                      </List.Item>
                    )
                  }
                />
              </Card>
            </Col>
          </Row>
        </div>
      </SearchLayout>
    </div>
  )
}

export default SearchPage;