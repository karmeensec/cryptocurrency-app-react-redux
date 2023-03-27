import { Avatar, Card, Col, Row, Select, Typography } from 'antd'
import moment from 'moment/moment'
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Title, Text } = Typography;
const { Option } = Select;
const demo = '';

const News = ({ simpleVersion }) => {

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', counter: simpleVersion ? 6: 12 });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return 'Loading...';

  return (
    
    <Row gutter={[24, 24]}>

      

        {cryptoNews.value.map((news, i)=> (
          <Col xs={24} sm={12} lg={8} key={i}>
              <Card className='news-card' hoverable>
                <a href={news.url} target='_blank' rel='noreferrer'>

                  <div className='news-image-container'>

                    <Title className='news-title' level={4}> {news.name} </Title>
                    <img style={{ maxWidth: '100px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demo } alt="news" />
                  </div>
                  <p>
                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </p>
                  <div className='provider-container'>
                    <div>
                      <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demo } alt='news' />
                      <Text className='provider-name'> {news.provider[0]?.name} </Text>
                    </div>
                    <Text> {moment(news.datePublished).startOf('ss').fromNow()} </Text>
                  </div>

                </a>
              </Card>
          </Col>
        ))}
    </Row>
    
  )
}

export default News