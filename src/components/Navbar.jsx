import { MoneyCollectOutlined } from '@ant-design/icons'
import { BulbOutlined, FundViewOutlined, HomeOutlined, MenuFoldOutlined } from '@ant-design/icons/lib/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/cryptocurrency.png';

const Navbar = () => {

  return (

    <div className='nav-container'>
        
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to='/' >CryptoMoon</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>

        <Menu theme='light' >
          
            <Menu.Item icon={ <HomeOutlined /> } >
              <Link to='/' >Home</Link>
            </Menu.Item>

            <Menu.Item icon={ <FundViewOutlined /> } >
              <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
            </Menu.Item>

            <Menu.Item icon={ <MoneyCollectOutlined /> } >
              <Link to='/exchanges' >Exchanges</Link>
            </Menu.Item>

            <Menu.Item icon={ <BulbOutlined /> } >
              <Link to='/news' >News</Link>
            </Menu.Item>

        </Menu>

    </div>

  )
}

export default Navbar