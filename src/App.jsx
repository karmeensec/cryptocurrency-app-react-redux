import { useState } from 'react'
import './App.css'
import { Route, Link, Routes} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import { Navbar } from './components';

function App() {

  return (

    <div className='app'>

      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>

      </div>

      <div className='footer'>

      </div>

    </div>

  )
}

export default App
