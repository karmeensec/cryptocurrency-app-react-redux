import { Col, Row, Select, Typography } from 'antd'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoneyCollectOutlined, DollarCircleOutlined, FundViewOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckCircleOutlined, FieldNumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import { LineChart } from '../components';

const { Text, Title } = Typography;
const { Option} = Select;

const Cryptodetails = () => {

  const {coinId} = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
  const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod});
  const cryptoDetails = data?.data?.coin;

  console.log(data);

  if (isFetching) return 'Loading...';

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <FieldNumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundViewOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckCircleOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (

    <Col className='coin-detail-container'>
      
      <Col className='coin-heading-container'>
        <Title className='coin-name' level={2}>
          {cryptoDetails.name} ({cryptoDetails.slug}) Price
        </Title>
        <p>
          {cryptoDetails.name} live price in US dollars. Explore value statistics, market cap and supply statistics.
        </p>
      </Col>

      <Select defaultValue='7d' className='select-timeperiod' placeholder='Select Time Period' onChange={ (value)=> setTimePeriod(value) } >

        {time.map((date)=> (
          <Option key={date} > {date} </Option>
        ))}
        
      </Select>

      <LineChart  coinHistory = {coinHistory} coinName = {cryptoDetails.name} currentPrice = { millify(cryptoDetails.price) } />

      <Col className='stats-container'>

        <Col className='coin-value-statistics'>

          <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-details-heading'>
              {cryptoDetails.name} Value statistics
            </Title>
            <p>A Summary of the statistics of {cryptoDetails.name} with currency, rank and trading volume. </p>
          </Col>

          {stats.map(({title, value, icon}) => (
            <Col className='coin-stats'>

              <Col className='coin-stats-name'>
                <Text> {icon} </Text>
                <Text> {title} </Text>
              </Col>

              <Text className='stats'> {value} </Text>

            </Col>
          ))}

        </Col>

        <Col className='other-stats-info'>

          <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-details-heading'>
              Other Crypto statistics
            </Title>
            <p>Explore the other statistics of {cryptoDetails.name} as well  with currency, rank and trading volume. </p>
          </Col>

          {genericStats.map(({title, value, icon}) => (
            <Col className='coin-stats'>

              <Col className='coin-stats-name'>
                <Text> {icon} </Text>
                <Text> {title} </Text>
              </Col>

              <Text className='stats'> {value} </Text>

            </Col>
          ))}

        </Col>

      </Col>

      <Col className='coin-desc-link'>

          <Row className='coin-desc'>
            <Title className='coin-details-heading' level={3} >
              What is the {cryptoDetails.name}?
              {HTMLReactParser(cryptoDetails.description)}
            </Title>
          </Row>

          <Col className='coin-links'>

            <Title level={3} className='coin-details-heading' >
              {cryptoDetails.name} Links
            </Title>

            {cryptoDetails.links.map((link)=> (
              <Row className='coin-link' key={link.name} >
                <Title className='link-name' level={5} >
                  {link.type}
                </Title>
                <a href={link.url} target='_blank' rel='noreferrer' > {link.name} </a>
              </Row>
            ))}

          </Col>

      </Col>

    </Col>
    
  )
}

export default Cryptodetails