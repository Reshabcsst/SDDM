import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CreateAdminForm = ({ isOpen, isClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" >
                {"Create admin"}
            </DialogTitle>
            <DialogContent>
                <div className='input'>
                    <input className='formInput' type='text' placeholder='Login id' />
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Profile 1">
                            <g id="Vector">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.25C5.37665 0.25 3.25 2.37665 3.25 5C3.25 7.62335 5.37665 9.75 8 9.75C10.6234 9.75 12.75 7.62335 12.75 5C12.75 2.37665 10.6234 0.25 8 0.25ZM4.75 5C4.75 3.20507 6.20507 1.75 8 1.75C9.79493 1.75 11.25 3.20507 11.25 5C11.25 6.79493 9.79493 8.25 8 8.25C6.20507 8.25 4.75 6.79493 4.75 5Z" fill="#2D264B" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 11.25C2.37665 11.25 0.25 13.3766 0.25 16C0.25 18.6234 2.37665 20.75 5 20.75H11C13.6234 20.75 15.75 18.6234 15.75 16C15.75 13.3766 13.6234 11.25 11 11.25H5ZM1.75 16C1.75 14.2051 3.20507 12.75 5 12.75H11C12.7949 12.75 14.25 14.2051 14.25 16C14.25 17.7949 12.7949 19.25 11 19.25H5C3.20507 19.25 1.75 17.7949 1.75 16Z" fill="#2D264B" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='input'>
                    <input className='formInput' type='text' placeholder='Password' />
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Lock 2">
                            <g id="Vector">
                                <path d="M10.75 12C10.75 11.5858 10.4142 11.25 10 11.25C9.58582 11.25 9.25003 11.5858 9.25003 12V16C9.25003 16.4142 9.58582 16.75 10 16.75C10.4142 16.75 10.75 16.4142 10.75 16V12Z" fill="#2D264B" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C6.8244 0.25 4.25003 2.82436 4.25003 6V6.52281L4.22319 6.53142C2.47267 7.1002 1.10024 8.47263 0.531458 10.2232C0.249584 11.0907 0.249748 12.1319 0.250016 13.8382V14.1618C0.249748 15.8681 0.249584 16.9093 0.531458 17.7768C1.10024 19.5274 2.47267 20.8998 4.22319 21.4686C5.0907 21.7505 6.13191 21.7503 7.83817 21.75H12.1619C13.8682 21.7503 14.9094 21.7505 15.7769 21.4686C17.5274 20.8998 18.8998 19.5274 19.4686 17.7768C19.7505 16.9093 19.7503 15.8681 19.75 14.1619V13.8381C19.7503 12.1319 19.7505 11.0907 19.4686 10.2232C18.8998 8.47263 17.5274 7.1002 15.7769 6.53142L15.75 6.52281V6C15.75 2.82436 13.1757 0.25 10 0.25ZM7.91606 6.25C7.03686 6.24997 6.33514 6.24994 5.75003 6.28306V6C5.75003 3.65279 7.65282 1.75 10 1.75C12.3472 1.75 14.25 3.65279 14.25 6V6.28306C13.6649 6.24994 12.9632 6.24997 12.084 6.25H7.91606ZM5.12463 7.85329C5.72223 7.75262 6.52818 7.75 8.00003 7.75H12C13.4719 7.75 14.2778 7.75262 14.8754 7.85329C15.0407 7.88113 15.1832 7.91571 15.3134 7.95801C16.6072 8.37841 17.6216 9.39282 18.042 10.6867C18.2408 11.2984 18.25 12.0803 18.25 14C18.25 15.9197 18.2408 16.7016 18.042 17.3133C17.6216 18.6072 16.6072 19.6216 15.3134 20.042C14.7016 20.2407 13.9197 20.25 12 20.25H8.00003C6.08038 20.25 5.29842 20.2407 4.68671 20.042C3.39285 19.6216 2.37844 18.6072 1.95804 17.3133C1.75929 16.7016 1.75003 15.9197 1.75003 14C1.75003 12.0803 1.75929 11.2984 1.95804 10.6867C2.37844 9.39282 3.39285 8.37841 4.68671 7.95801C4.81688 7.91571 4.95938 7.88113 5.12463 7.85329Z" fill="#2D264B" />
                            </g>
                        </g>
                    </svg>
                </div>
            </DialogContent>
            <DialogActions>
                <button className='create'>Create</button>
            </DialogActions>
        </Dialog>

    )
}

export default CreateAdminForm;
