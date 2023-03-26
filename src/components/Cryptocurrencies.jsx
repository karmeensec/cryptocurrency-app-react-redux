import { Card, Col, Row, Input } from 'antd'
import millify from 'millify'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {

  const {data: cryptoList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  console.log(cryptos);

  return (

    <>
    
      <Row gutters={[32, 32]} className='crypto-card-container' >
        
      </Row>

    </>
    
  )
}

export default Cryptocurrencies