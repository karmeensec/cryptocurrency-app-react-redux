import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Line } from 'react-chartjs-2'

const {Title} = Typography;

const LineChart = ({ coinHistory, coinName, currentPrice }) => {

    const coinPrice = [];
    const coinTime = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTime.push(new Date (coinHistory.data.history[i].time).toLocaleDateString);
    }

    const data = {

        labels: coinTime,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#F1C40F',
                borderColor: '#D4AC0D',
            }
        ]

    }

    const options = {

        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    }
                }
            ]
        }

    }

  return (
    
    <>
    
        <Row className='chart-header'>

            <Title level={2} className='chart-title' > {coinName} Prices Chart </Title>

            <Col className='price-container'>
                <Title level={5} className='price-change' > {coinHistory?.data?.change} % </Title>
                <Title level={5} className='current-price' > Current {coinName} Price: $ {currentPrice} </Title>
            </Col>

        </Row>

        <Line data={data} options={options} />

    </>

  )
}

export default LineChart