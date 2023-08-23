import React, { useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './Styles/AddAdvertisement.css';
import { useDropzone } from 'react-dropzone';
import Data2 from './DummyData/Add advertisement';
import logo from './Images/logo-removebg.png';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 60,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(29px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#40E4A9' : '#40E4A9',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 27,
        height: 28,
    },
    '& .MuiSwitch-track': {
        borderRadius: 31 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#F95353' : '#F95353',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
const AddAdvertisement = () => {
    const [checked, setChecked] = useState();

    const handleChange = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };





    // D&D
    const {
        getRootProps,
        getInputProps,
        isFocused,
        open,
        isDragAccept,
        isDragReject
    } = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            acceptedFiles.forEach(File => {
                Data2.push(File)
            })
        }
    });



    const baseStyle = {

    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };


    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    // D&D

    return (
        <div className='advertisement'>
            <div className='in'>
                <div className='title'>
                    <p>Add advertisement</p>
                </div>
                <div className='box12'>
                    <div className='picUpload'>
                        <div className="outline" {...getRootProps({ style })}>
                            <input {...getInputProps()} />
                            <svg onClick={open} width="80" height="80" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Document Upload 4">
                                    <g id="Vector">
                                        <path d="M10.7935 9.09823C10.7787 9.08635 10.7642 9.07487 10.75 9.06379V16C10.75 16.4142 10.4142 16.75 10 16.75C9.58579 16.75 9.25 16.4142 9.25 16V9.06379C9.23578 9.07487 9.22128 9.08635 9.20649 9.09823C8.88386 9.35733 8.50033 9.74268 7.93054 10.3176L6.53269 11.728C6.24111 12.0222 5.76624 12.0243 5.47204 11.7327C5.17784 11.4411 5.17573 10.9662 5.46731 10.672L6.89565 9.2309C7.42703 8.69473 7.87023 8.24753 8.26724 7.92869C8.68367 7.59426 9.12131 7.33989 9.65451 7.27193C9.88392 7.24269 10.1161 7.24269 10.3455 7.27193C10.8787 7.33989 11.3163 7.59427 11.7328 7.92869C12.1298 8.24753 12.573 8.69471 13.1043 9.23087L14.5327 10.672C14.8243 10.9662 14.8222 11.4411 14.528 11.7327C14.2338 12.0243 13.7589 12.0222 13.4673 11.728L12.0695 10.3176C11.4997 9.74268 11.1161 9.35733 10.7935 9.09823Z" fill="#243AFF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728C13.3214 0.249985 11.8818 0.249992 10.0452 0.25H9.98893C8.82888 0.25 7.83152 0.25 6.97432 0.279369C5.10087 0.343555 3.7239 0.546296 2.62024 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62024C0.546295 3.7239 0.343555 5.10087 0.279369 6.97432C0.25 7.83153 0.25 8.82891 0.25 9.98898V12.0453C0.249992 13.8818 0.249985 15.3214 0.373728 16.4635C0.500006 17.6291 0.762323 18.5734 1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62024 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.67859 21.75 8.11817 21.75 9.95465 21.75H10.0453C11.8818 21.75 13.3214 21.75 14.4635 21.6263C15.6291 21.5 16.5734 21.2377 17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798C19.2377 18.5734 19.5 17.6291 19.6263 16.4635C19.75 15.3214 19.75 13.8818 19.75 12.0453V9.95473C19.75 8.11824 19.75 6.67859 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62024C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815ZM10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10V12C18.25 13.8916 18.249 15.25 18.135 16.302C18.0225 17.3399 17.8074 17.9901 17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383C15.9901 19.8074 15.3399 20.0225 14.302 20.135C13.25 20.249 11.8916 20.25 10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12V10C1.75 9.15165 1.75005 8.40822 1.76082 7.74818C2.23547 7.74381 2.58489 7.72904 2.8995 7.67921C5.35988 7.28952 7.28952 5.35988 7.67921 2.8995C7.72904 2.58489 7.74381 2.23547 7.74818 1.76082C8.40822 1.75005 9.15165 1.75 10 1.75ZM2.66485 6.19768C2.45981 6.23015 2.22238 6.24254 1.81744 6.24722C1.91121 4.88688 2.12615 4.10137 2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168C4.10137 2.12615 4.88688 1.91121 6.24722 1.81744C6.24254 2.22238 6.23015 2.45981 6.19768 2.66485C5.90965 4.48339 4.48339 5.90965 2.66485 6.19768Z" fill="#243AFF" />
                                    </g>
                                </g>
                            </svg>


                            <p>Upload image</p>
                        </div>
                    </div>
                    <div className='inputSec'>
                        <p>Assembly code: JHG/SDDM/2023/08/12/1334563</p>
                        <div className='input121'>
                            <input className='fm' type='text' placeholder='ward no' />
                            <input className='fm' type='text' placeholder='address' />
                        </div>
                        <div className='input121'>
                            <input className='fm' type='text' placeholder='latitude' />
                            <input className='fm' type='text' placeholder='longitude' />
                        </div>
                    </div>
                </div>

                <p className='title2'>Existing advertisement</p>

                {Data2.map((data, index) => (
                    <div key={index}>
                        <div className='button51'>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked={data.active} onChange={handleChange} />}
                            />
                        </div>
                        <div className='addCard' style={{ border: `${data.active ? "5px solid #40E4A9" : "5px solid #F95353"}`, background: `${data.active ? "rgba(64, 228, 169, 0.05)" : "rgba(249, 83, 83, 0.05)"}` }}>

                            <div className='leftSec'>
                                <img src={data.img} alt="img" />
                                <p>Assembly code: {data.AssemblyCode}</p>
                            </div>
                            <div className='detailes'>
                                <p><small>ward no : </small>{data.wardNo}</p>
                                <p><small>address : </small>{data.address}</p>
                                <p><small>latitude : </small>{data.latitude}</p>
                                <p><small>longitude : </small>{data.longitude}</p>
                            </div>
                            <div className='logo'>
                                <img src={logo} alt='logo' />
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default AddAdvertisement;
