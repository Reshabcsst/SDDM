import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './Styles/Dashboard.css';
import CloseIcon from '@mui/icons-material/Close';

const AssignForm = ({ isOpen, isClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{display:"flex",justifyContent:"space-between"}} id="alert-dialog-title" >
                {"Assign"}
                <CloseIcon onClick={isClose} sx={{cursor:"pointer"}} fontSize='large'/>
            </DialogTitle>
            <DialogContent>
                <div className='input'>
                    <svg width="20" height="20" style={{ marginRight: "5px", marginLeft: "12px" }} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Down Square 2">
                            <path id="Vector" d="M3.06107 18.0451L3.50191 17.4383L3.06107 18.0451ZM1.95491 16.9389L2.56168 16.4981L1.95491 16.9389ZM18.0451 16.9389L17.4383 16.4981L18.0451 16.9389ZM16.9389 18.0451L16.4981 17.4383L16.9389 18.0451ZM16.9389 1.95491L16.4981 2.56168L16.9389 1.95491ZM18.0451 3.06107L17.4383 3.50191L18.0451 3.06107ZM3.06107 1.95491L3.50191 2.56168L3.06107 1.95491ZM1.95491 3.06107L2.56168 3.50191L1.95491 3.06107ZM15.5327 8.52796C15.8243 8.23376 15.8222 7.75889 15.528 7.46731C15.2338 7.17572 14.7589 7.17784 14.4673 7.47204L15.5327 8.52796ZM13.2527 9.76297L12.72 9.23501L13.2527 9.76297ZM6.74731 9.76297L6.21462 10.2909L6.74731 9.76297ZM5.53269 7.47204C5.24111 7.17784 4.76624 7.17573 4.47204 7.46731C4.17784 7.75889 4.17573 8.23376 4.46731 8.52796L5.53269 7.47204ZM10.3133 11.9801L10.4082 12.7241L10.4082 12.7241L10.3133 11.9801ZM9.68667 11.9801L9.59184 12.7241H9.59184L9.68667 11.9801ZM10 18.25C8.10843 18.25 6.74999 18.249 5.69804 18.135C4.66013 18.0225 4.00992 17.8074 3.50191 17.4383L2.62023 18.6518C3.42656 19.2377 4.37094 19.5 5.53648 19.6263C6.68798 19.751 8.14184 19.75 10 19.75V18.25ZM0.25 10C0.25 11.8582 0.248971 13.312 0.373728 14.4635C0.500006 15.6291 0.762324 16.5734 1.34815 17.3798L2.56168 16.4981C2.19259 15.9901 1.97745 15.3399 1.865 14.302C1.75103 13.25 1.75 11.8916 1.75 10H0.25ZM3.50191 17.4383C3.14111 17.1762 2.82382 16.8589 2.56168 16.4981L1.34815 17.3798C1.70281 17.8679 2.13209 18.2972 2.62023 18.6518L3.50191 17.4383ZM18.25 10C18.25 11.8916 18.249 13.25 18.135 14.302C18.0225 15.3399 17.8074 15.9901 17.4383 16.4981L18.6518 17.3798C19.2377 16.5734 19.5 15.6291 19.6263 14.4635C19.751 13.312 19.75 11.8582 19.75 10H18.25ZM10 19.75C11.8582 19.75 13.312 19.751 14.4635 19.6263C15.6291 19.5 16.5734 19.2377 17.3798 18.6518L16.4981 17.4383C15.9901 17.8074 15.3399 18.0225 14.302 18.135C13.25 18.249 11.8916 18.25 10 18.25V19.75ZM17.4383 16.4981C17.1762 16.8589 16.8589 17.1762 16.4981 17.4383L17.3798 18.6518C17.8679 18.2972 18.2972 17.8679 18.6518 17.3798L17.4383 16.4981ZM10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168L17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728C13.312 0.248971 11.8582 0.25 10 0.25V1.75ZM19.75 10C19.75 8.14184 19.751 6.68798 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62023L17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10H19.75ZM16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191L18.6518 2.62023C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815L16.4981 2.56168ZM10 0.25C8.14184 0.25 6.68798 0.248971 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62023 1.34815L3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75V0.25ZM1.75 10C1.75 8.10843 1.75103 6.74999 1.865 5.69804C1.97745 4.66013 2.19259 4.00992 2.56168 3.50191L1.34815 2.62023C0.762324 3.42656 0.500006 4.37094 0.373728 5.53648C0.248971 6.68798 0.25 8.14184 0.25 10H1.75ZM2.62023 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62023L2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168L2.62023 1.34815ZM14.4673 7.47204L12.72 9.23501L13.7854 10.2909L15.5327 8.52796L14.4673 7.47204ZM7.28 9.23501L5.53269 7.47204L4.46731 8.52796L6.21462 10.2909L7.28 9.23501ZM12.72 9.23501C12.0109 9.9505 11.5228 10.4413 11.1093 10.7734C10.7076 11.096 10.4496 11.2067 10.2185 11.2361L10.4082 12.7241C11.0263 12.6453 11.5412 12.3504 12.0485 11.9429C12.544 11.545 13.1011 10.9814 13.7854 10.2909L12.72 9.23501ZM6.21462 10.2909C6.89892 10.9814 7.45597 11.545 7.95146 11.9429C8.45879 12.3504 8.97373 12.6453 9.59184 12.7241L9.7815 11.2361C9.55042 11.2067 9.2924 11.096 8.89071 10.7734C8.47718 10.4413 7.98914 9.9505 7.28 9.23501L6.21462 10.2909ZM10.2185 11.2361C10.0734 11.2546 9.92659 11.2546 9.7815 11.2361L9.59184 12.7241C9.86286 12.7586 10.1371 12.7586 10.4082 12.7241L10.2185 11.2361Z" fill="#2D264B" />
                        </g>
                    </svg>
                    <input className='formInput' type='text' placeholder='Ward no' />
                </div>
                <div className='input'>
                    <svg width="18" height="23" style={{ marginRight: "5px", marginLeft: "12px" }} viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Location">
                            <path id="Vector" d="M11.7808 19.7005L11.1906 19.2377L11.7808 19.7005ZM6.21921 19.7005L5.62903 20.1633L6.21921 19.7005ZM9 22.0055V21.2555V22.0055ZM16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087H16.25ZM6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087H0.25C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L6.80938 19.2377ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75V0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087H1.75ZM9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087H17.75C17.75 4.49277 13.8833 0.25 9 0.25V1.75ZM11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555V22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.2886 21.5476 11.7849 20.9107 12.371 20.1633L11.1906 19.2377ZM5.62903 20.1633C6.21511 20.9107 6.71136 21.5476 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555V21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377L5.62903 20.1633ZM5.25 10C5.25 12.0711 6.92893 13.75 9 13.75V12.25C7.75736 12.25 6.75 11.2426 6.75 10H5.25ZM9 13.75C11.0711 13.75 12.75 12.0711 12.75 10H11.25C11.25 11.2426 10.2426 12.25 9 12.25V13.75ZM12.75 10C12.75 7.92893 11.0711 6.25 9 6.25V7.75C10.2426 7.75 11.25 8.75736 11.25 10H12.75ZM9 6.25C6.92893 6.25 5.25 7.92893 5.25 10H6.75C6.75 8.75736 7.75736 7.75 9 7.75V6.25Z" fill="#2D264B" />
                        </g>
                    </svg>
                    <input className='formInput' type='text' placeholder='Location' />
                </div>
                <div className='input'>
                    <svg width="18" height="23" style={{ marginRight: "5px", marginLeft: "12px" }} viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Location">
                            <path id="Vector" d="M11.7808 19.7005L11.1906 19.2377L11.7808 19.7005ZM6.21921 19.7005L5.62903 20.1633L6.21921 19.7005ZM9 22.0055V21.2555V22.0055ZM16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087H16.25ZM6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087H0.25C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L6.80938 19.2377ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75V0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087H1.75ZM9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087H17.75C17.75 4.49277 13.8833 0.25 9 0.25V1.75ZM11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555V22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.2886 21.5476 11.7849 20.9107 12.371 20.1633L11.1906 19.2377ZM5.62903 20.1633C6.21511 20.9107 6.71136 21.5476 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555V21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377L5.62903 20.1633ZM5.25 10C5.25 12.0711 6.92893 13.75 9 13.75V12.25C7.75736 12.25 6.75 11.2426 6.75 10H5.25ZM9 13.75C11.0711 13.75 12.75 12.0711 12.75 10H11.25C11.25 11.2426 10.2426 12.25 9 12.25V13.75ZM12.75 10C12.75 7.92893 11.0711 6.25 9 6.25V7.75C10.2426 7.75 11.25 8.75736 11.25 10H12.75ZM9 6.25C6.92893 6.25 5.25 7.92893 5.25 10H6.75C6.75 8.75736 7.75736 7.75 9 7.75V6.25Z" fill="#2D264B" />
                        </g>
                    </svg>
                    <input className='formInput' type='text' placeholder='Nearest location' />
                </div>

                <div className='input'>
                    <textarea className='formInput' rows="3" cols="35" name="text" placeholder="description..."></textarea>
                </div>
            </DialogContent>
            <DialogActions sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <button className='create'>Add admin</button>
                <button className='create'>Assign</button>
            </DialogActions>
        </Dialog>

    )
}

export default AssignForm;
