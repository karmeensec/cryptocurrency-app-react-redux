import { Col, Row, Select, Typography } from 'antd'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoneyCollectOutlined, DollarCircleOutlined, FundViewOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckCircleOutlined, FieldNumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Option} = Select;

const Cryptodetails = () => {

  const {coinId} = useParams();
  const [timePeriod, setTimePeriod] = useState('7 days');

  return (

    <div>Cryptodetails {coinId} </div>
    
  )
}

export default Cryptodetails