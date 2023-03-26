import { Avatar, Card, Col, Row, Select, Typography } from 'antd'
import moment from 'moment/moment'
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simpleVersion }) => {

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', counter: simpleVersion ? 10: 100 });

  return (
    
    <div>News</div>
    
  )
}

export default News