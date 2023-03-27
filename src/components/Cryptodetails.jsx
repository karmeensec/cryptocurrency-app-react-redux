import { Col, Row, Select, Typography } from 'antd'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoneyCollectOutlined, DollarCircleOutlined, FundViewOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckCircleOutlined, FieldNumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Text, Title } = Typography;
const { Option} = Select;

const Cryptodetails = () => {

  const {coinId} = useParams();
  const [timePeriod, setTimePeriod] = useState('7 days');
  const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
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

    <div>Cryptodetails {coinId} </div>
    
  )
}

export default Cryptodetails