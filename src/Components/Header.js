import React, { useState } from 'react';
import logo from './Images/logo-removebg.png';
import './Styles/Header.css';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
    const [menu, setMenu] = useState("headerAccountSec");
    const navigate = useNavigate();
    const home = () => {
        navigate("/adds");
    };
    const showNav = () => {
        setMenu('headerAccountSec activeNavbar')
    };
    const closeNav = () => {
        setMenu('headerAccountSec')
    }
    return (
        <div className='header'>
            <img src={logo} onClick={home} alt='logo' className='logo' />
            <div className={menu}>
                <div className='search'>
                    <button>
                        Search
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="&#240;&#159;&#166;&#134; icon &#34;search normal 1&#34;">
                                <g id="Group">
                                    <path id="Vector" d="M8.2611 16.7296C3.86783 16.7296 0.291016 12.9757 0.291016 8.36481C0.291016 3.75396 3.86783 0 8.2611 0C12.6544 0 16.2312 3.75396 16.2312 8.36481C16.2312 12.9757 12.6544 16.7296 8.2611 16.7296ZM8.2611 1.22412C4.50544 1.22412 1.45737 4.43131 1.45737 8.36481C1.45737 12.2983 4.50544 15.5055 8.2611 15.5055C12.0168 15.5055 15.0648 12.2983 15.0648 8.36481C15.0648 4.43131 12.0168 1.22412 8.2611 1.22412Z" fill="#292D32" />
                                    <path id="Vector_2" d="M16.4259 17.5456C16.2782 17.5456 16.1304 17.4885 16.0138 17.3661L14.4587 15.7339C14.2332 15.4973 14.2332 15.1056 14.4587 14.8689C14.6842 14.6322 15.0574 14.6322 15.2829 14.8689L16.838 16.5011C17.0635 16.7377 17.0635 17.1294 16.838 17.3661C16.7214 17.4885 16.5737 17.5456 16.4259 17.5456Z" fill="#292D32" />
                                </g>
                            </g>
                        </svg>

                    </button>
                    <input type='text' />
                </div>


                <div className='NA'>
                    <div className='notification'>
                        <Badge sx={{ cursor: "pointer" }} color="primary" badgeContent={9}>
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </div>
                    <div className='account'>
                        <Avatar sx={{ height: { xs: '40px', sm: '50px',md:"50px" }, width: { xs: '40px', sm: '50px',md:"50px" }, cursor: "pointer" }}>R</Avatar>
                        <div className='AD'>
                            <p>
                                super admin
                            </p>
                            <small>
                                reshab123@gmail.com
                            </small>
                        </div>
                    </div>

                </div>
                <div onClick={closeNav} className='closeNavbar'>
                    <CloseOutlinedIcon className='icon' />

                </div>
            </div>


            <div onClick={showNav} className='toddleNavbar'>
                <MenuOutlinedIcon className="icon" />
            </div>
        </div>
    )
}

export default Header;
