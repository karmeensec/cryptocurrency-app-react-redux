import { useState } from 'react'
import './App.css'
import { Route, Link, Routes} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import { Navbar, HomePage, Exchanges, Cryptocurrencies, Cryptodetails, News } from './components';

function App() {

  return (

    <div className='app'>

      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>

        <Layout style={{ background: '#FDFEFE', boxShadow: 'rgba(0, 91, 202, 0.5) -5px 5px, rgba(0, 91, 202, 0.4) -10px 10px, rgba(0, 91, 202, 0.3) -15px 15px, rgba(0, 91, 202, 0.2) -20px 20px, rgba(0, 91, 202, 0.08) -25px 25px' }}>
          <div className='routes'>
            <Routes>

              <Route exact path='/' element={ <HomePage />} ></Route>

              <Route exact path='/exchanges' element={ <Exchanges /> } ></Route>

              <Route exact path='/cryptocurrencies' element={ <Cryptocurrencies /> } ></Route>

              <Route exact path='/crypto/:coinId' element={ <Cryptodetails /> } ></Route>

              <Route exact path='/news' element={ <News /> } ></Route>

            </Routes>
          </div>
        </Layout>


        <div className='footer' style={{ boxShadow: 'rgba(0, 91, 202, 0.5) -5px 5px, rgba(0, 91, 202, 0.4) -10px 10px, rgba(0, 91, 202, 0.3) -15px 15px, rgba(0, 91, 202, 0.2) -20px 20px, rgba(0, 91, 202, 0.08) -25px 25px' }} >
            <Typography.Title level={5} style={{ textAlign: 'center' }} >
              CryptoMoon <br /> All rights reserved!
            </Typography.Title>
            <Space>
              <Link to='/' >Home</Link>
              <Link to='/exchanges' >Exchanges</Link>
              <Link to='/news' >News</Link>
            </Space>
        </div>

      </div>

    </div>

  )
}

export default App
