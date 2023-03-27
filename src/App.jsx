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

        <Layout style={{ background: '#FDFEFE', boxShadow: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px' }}>
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


        <div className='footer'>
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
