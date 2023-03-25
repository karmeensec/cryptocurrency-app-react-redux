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

        <Layout>
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

      </div>

      <div className='footer'>

      </div>

    </div>

  )
}

export default App
