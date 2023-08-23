import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './Styles/RegisteredAgency.css';

const RegisteredAgencyForm = ({ isOpen, isClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            fullWidth={true}
            maxWidth={"xl"}
        >
            <DialogTitle id="alert-dialog-title" >
                {"Register agency"}
            </DialogTitle>
            <DialogContent>
                <div className='inputs'>
                    <div className='uprInput'>
                        <div className='label'>
                            <label>Business name</label>
                            <input type='text' placeholder='Enter business name' />
                        </div>
                        <div className='label'>
                            <label>Gst no</label>
                            <input type='text' placeholder='Gst no' />
                        </div>
                        <div className='label'>
                            <label>Trade license</label>
                            <input type='text' placeholder='#demo' />
                        </div>
                        <div className='label'>
                            <label>Business Category</label>
                            <input type='text' placeholder='Cloth' />
                        </div>
                        <div className='label'>
                            <label>Phone no</label>
                            <input type='text' placeholder='+91 98123 - 87654' />
                        </div>
                        <div className='label'>
                            <label>Email</label>
                            <input type='text' placeholder='Enter your email' />
                        </div>
                        <div className='label1'>
                            <label>Address</label>
                            <input className='address' type='text' placeholder='Enter your address' />
                        </div>
                    </div>


                    <div className='lwrInput'>
                        <div className='label'>
                            <label>Time frames</label>
                            <input type='text' placeholder='6 months' />
                        </div>
                        <div className='label'>
                            <label>Total adds</label>
                            <input type='text' placeholder='100' />
                        </div>
                        <div className='label'>
                            <label>Price</label>
                            <input type='text' placeholder='30,000' />
                        </div>
                        <div className='time'>
                            <input type='date' placeholder='start' />


                            <input type='date' placeholder='end' />
                        </div>
                        <p className='code'>Assembly code: JHG/SDDM/2023/08/12/1334563</p>

                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <div className='buttons'>
                    <button onClick={isClose} className='cancel'>
                        Cancel
                    </button>
                    <button className='done'>
                        Done
                    </button>
                </div>
            </DialogActions>
        </Dialog>

    )
}

export default RegisteredAgencyForm;