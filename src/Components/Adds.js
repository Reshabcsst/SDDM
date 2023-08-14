import React from 'react';
import './Styles/Adds.css';
import Data from './DummyData/AddsData';
import Data2 from './DummyData/Add advertisement'
import { useNavigate } from 'react-router-dom';

const Adds = () => {
    const navigate = useNavigate();
    return (
        <div className='adds'>
            <div className='in'>
                <div className='upr12'>
                    <p className='addsHeader'>Registered Agencies</p>
                    <button>
                        <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Upload">
                                <path id="Vector" d="M5.21783 18.9384L5.1005 19.6792H5.1005L5.21783 18.9384ZM1.06156 14.7822L1.80232 14.6648L1.06156 14.7822ZM18.9384 14.7822L19.6792 14.8995V14.8995L18.9384 14.7822ZM14.7822 18.9384L14.8995 19.6792H14.8995L14.7822 18.9384ZM18.6 8.54956C18.3513 8.21837 17.8811 8.15156 17.5499 8.40032C17.2187 8.64909 17.1519 9.11924 17.4007 9.45043L18.6 8.54956ZM2.59931 9.45043C2.84808 9.11924 2.78126 8.64909 2.45007 8.40032C2.11888 8.15156 1.64873 8.21837 1.39996 8.54956L2.59931 9.45043ZM9.25 15C9.25 15.4142 9.58579 15.75 10 15.75C10.4142 15.75 10.75 15.4142 10.75 15H9.25ZM5.41232 4.53403C5.15497 4.8586 5.20946 5.33034 5.53403 5.58768C5.8586 5.84503 6.33034 5.79054 6.58768 5.46597L5.41232 4.53403ZM7.39785 3.23703L6.81016 2.77106L7.39785 3.23703ZM12.6022 3.23703L13.1898 2.77106L12.6022 3.23703ZM13.4123 5.46597C13.6697 5.79054 14.1414 5.84503 14.466 5.58768C14.7905 5.33034 14.845 4.8586 14.5877 4.53403L13.4123 5.46597ZM9.74934 1.01989L9.63133 0.279231L9.63133 0.279232L9.74934 1.01989ZM10.2507 1.01989L10.3687 0.279232L10.3687 0.279231L10.2507 1.01989ZM18.25 12V13H19.75V12H18.25ZM13 18.25H7V19.75H13V18.25ZM1.75 13V12H0.25V13H1.75ZM7 18.25C6.04233 18.25 5.65082 18.2477 5.33515 18.1977L5.1005 19.6792C5.56216 19.7523 6.09965 19.75 7 19.75V18.25ZM0.25 13C0.25 13.9003 0.247672 14.4378 0.320792 14.8995L1.80232 14.6648C1.75233 14.3492 1.75 13.9577 1.75 13H0.25ZM5.33515 18.1977C3.51661 17.9096 2.09035 16.4834 1.80232 14.6648L0.320792 14.8995C0.710478 17.3599 2.64012 19.2895 5.1005 19.6792L5.33515 18.1977ZM18.25 13C18.25 13.9577 18.2477 14.3492 18.1977 14.6648L19.6792 14.8995C19.7523 14.4378 19.75 13.9003 19.75 13H18.25ZM13 19.75C13.9003 19.75 14.4378 19.7523 14.8995 19.6792L14.6648 18.1977C14.3492 18.2477 13.9577 18.25 13 18.25V19.75ZM18.1977 14.6648C17.9096 16.4834 16.4834 17.9096 14.6648 18.1977L14.8995 19.6792C17.3599 19.2895 19.2895 17.3599 19.6792 14.8995L18.1977 14.6648ZM19.75 12C19.75 10.7064 19.3219 9.51064 18.6 8.54956L17.4007 9.45043C17.9342 10.1607 18.25 11.0424 18.25 12H19.75ZM1.75 12C1.75 11.0424 2.06583 10.1607 2.59931 9.45043L1.39996 8.54956C0.678064 9.51064 0.25 10.7064 0.25 12H1.75ZM10.75 15V2H9.25V15H10.75ZM6.58768 5.46597L7.98553 3.703L6.81016 2.77106L5.41232 4.53403L6.58768 5.46597ZM12.0145 3.703L13.4123 5.46597L14.5877 4.53403L13.1898 2.77106L12.0145 3.703ZM7.98553 3.703C8.55429 2.98568 8.94177 2.49884 9.26822 2.17113C9.59132 1.84678 9.76116 1.77747 9.86734 1.76055L9.63133 0.279232C9.05816 0.370553 8.60963 0.706845 8.20552 1.11252C7.80475 1.51484 7.35616 2.08245 6.81016 2.77106L7.98553 3.703ZM13.1898 2.77106C12.6438 2.08245 12.1953 1.51484 11.7945 1.11252C11.3904 0.706846 10.9418 0.370553 10.3687 0.279232L10.1327 1.76055C10.2388 1.77747 10.4087 1.84678 10.7318 2.17113C11.0582 2.49884 11.4457 2.98568 12.0145 3.703L13.1898 2.77106ZM9.86734 1.76055C9.91168 1.75348 9.95595 1.75 10 1.75V0.25C9.87662 0.25 9.75344 0.259776 9.63133 0.279231L9.86734 1.76055ZM10 1.75C10.0441 1.75 10.0883 1.75348 10.1327 1.76055L10.3687 0.279231C10.2466 0.259776 10.1234 0.25 10 0.25V1.75ZM10.75 2V1H9.25V2H10.75Z" fill="white" />
                            </g>
                        </svg>
                        Register agency
                    </button>
                </div>

                <div className='container'>
                    {Data.map((data, index) => (
                        <div className='add' style={{ background: `${data.active ? "rgba(64, 228, 169, 0.15)" : "rgba(253, 85, 85, 0.15)"}` }} key={index}>

                            <div className='checked'>
                                <svg className='fullicn' onClick={()=>{navigate("/addsAdvertisement")}} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Foreign">
                                        <path id="Vector" d="M3.06107 21.2298L3.50191 20.623H3.50191L3.06107 21.2298ZM1.95491 20.1237L1.34815 20.5645L1.95491 20.1237ZM18.0451 20.1237L17.4383 19.6828L18.0451 20.1237ZM16.9389 21.2298L16.4981 20.623H16.4981L16.9389 21.2298ZM3.06107 5.13964L2.62023 4.53288H2.62023L3.06107 5.13964ZM1.95491 6.2458L1.34815 5.80496H1.34815L1.95491 6.2458ZM11.991 4.94188C12.4052 4.94684 12.745 4.61511 12.7499 4.20092C12.7549 3.78674 12.4232 3.44695 12.009 3.44199L11.991 4.94188ZM19.7427 11.1757C19.7378 10.7616 19.398 10.4298 18.9838 10.4348C18.5696 10.4397 18.2379 10.7795 18.2428 11.1937L19.7427 11.1757ZM9.00543 12.5036C8.71253 12.7965 8.71253 13.2714 9.00543 13.5643C9.29832 13.8572 9.77319 13.8572 10.0661 13.5643L9.00543 12.5036ZM14.4822 0.263165C14.0679 0.265014 13.7337 0.602295 13.7355 1.0165C13.7374 1.43071 14.0746 1.765 14.4888 1.76315L14.4822 0.263165ZM16.9676 1.00208L16.971 1.75208L16.9676 1.00208ZM21.5676 5.60208L20.8177 5.59874L21.5676 5.60208ZM20.8066 8.08088C20.8047 8.49509 21.139 8.83237 21.5532 8.83422C21.9674 8.83607 22.3047 8.50178 22.3066 8.08757L20.8066 8.08088ZM20.6138 1.51277L21.0729 0.919641L21.0729 0.91964L20.6138 1.51277ZM21.057 1.95589L21.6501 1.49687V1.49687L21.057 1.95589ZM20.8273 1.74245L20.3673 1.15009L20.3302 1.1789L20.297 1.21212L20.8273 1.74245ZM10 21.4347C8.10843 21.4347 6.74999 21.4337 5.69804 21.3197C4.66013 21.2073 4.00992 20.9921 3.50191 20.623L2.62024 21.8366C3.42656 22.4224 4.37094 22.6847 5.53648 22.811C6.68798 22.9358 8.14184 22.9347 10 22.9347V21.4347ZM0.25 13.1847C0.25 15.0429 0.248971 16.4967 0.373728 17.6483C0.500006 18.8138 0.762324 19.7582 1.34815 20.5645L2.56168 19.6828C2.19259 19.1748 1.97745 18.5246 1.865 17.4867C1.75103 16.4347 1.75 15.0763 1.75 13.1847H0.25ZM3.50191 20.623C3.14111 20.3609 2.82382 20.0436 2.56168 19.6828L1.34815 20.5645C1.70281 21.0526 2.13209 21.4819 2.62024 21.8366L3.50191 20.623ZM18.25 13.1847C18.25 15.0763 18.249 16.4347 18.135 17.4867C18.0225 18.5246 17.8074 19.1748 17.4383 19.6828L18.6518 20.5645C19.2377 19.7582 19.5 18.8138 19.6263 17.6483C19.751 16.4967 19.75 15.0429 19.75 13.1847H18.25ZM10 22.9347C11.8582 22.9347 13.312 22.9358 14.4635 22.811C15.6291 22.6847 16.5734 22.4224 17.3798 21.8366L16.4981 20.623C15.9901 20.9921 15.3399 21.2073 14.302 21.3197C13.25 21.4337 11.8916 21.4347 10 21.4347V22.9347ZM17.4383 19.6828C17.1762 20.0436 16.8589 20.3609 16.4981 20.623L17.3798 21.8366C17.8679 21.4819 18.2972 21.0526 18.6518 20.5645L17.4383 19.6828ZM10 3.43473C8.14184 3.43473 6.68798 3.4337 5.53648 3.55845C4.37094 3.68473 3.42656 3.94705 2.62023 4.53288L3.50191 5.7464C4.00992 5.37732 4.66013 5.16218 5.69804 5.04973C6.74999 4.93576 8.10843 4.93473 10 4.93473V3.43473ZM1.75 13.1847C1.75 11.2932 1.75103 9.93472 1.865 8.88277C1.97745 7.84486 2.19259 7.19464 2.56168 6.68664L1.34815 5.80496C0.762324 6.61129 0.500006 7.55567 0.373728 8.7212C0.248971 9.8727 0.25 11.3266 0.25 13.1847H1.75ZM2.62023 4.53288C2.13209 4.88754 1.70281 5.31682 1.34815 5.80496L2.56168 6.68664C2.82382 6.32584 3.14111 6.00854 3.50191 5.7464L2.62023 4.53288ZM10 4.93473C10.7367 4.93473 11.3952 4.93474 11.991 4.94188L12.009 3.44199C11.4025 3.43472 10.7343 3.43473 10 3.43473V4.93473ZM19.75 13.1847C19.75 12.4504 19.75 11.7823 19.7427 11.1757L18.2428 11.1937C18.25 11.7895 18.25 12.448 18.25 13.1847H19.75ZM14.4888 1.76315L16.971 1.75208L16.9643 0.252091L14.4822 0.263165L14.4888 1.76315ZM20.8177 5.59874L20.8066 8.08088L22.3066 8.08757L22.3176 5.60543L20.8177 5.59874ZM16.971 1.75208C17.9784 1.74758 18.6705 1.74563 19.1977 1.80321C19.7099 1.85914 19.9706 1.96333 20.1548 2.1059L21.0729 0.91964C20.5801 0.538279 20.0074 0.38271 19.3606 0.312072C18.7288 0.243083 17.9364 0.247754 16.9643 0.252091L16.971 1.75208ZM22.3176 5.60543C22.322 4.63334 22.3266 3.84089 22.2577 3.20915C22.187 2.56232 22.0314 1.98965 21.6501 1.49687L20.4638 2.41491C20.6064 2.59913 20.7106 2.85983 20.7665 3.37199C20.8241 3.89923 20.8221 4.59137 20.8177 5.59874L22.3176 5.60543ZM10.0661 13.5643L21.3576 2.27278L20.297 1.21212L9.00543 12.5036L10.0661 13.5643ZM20.1548 2.1059C20.2134 2.15122 20.2689 2.20021 20.3211 2.25254L21.3834 1.19357C21.286 1.09581 21.1822 1.0043 21.0729 0.919641L20.1548 2.1059ZM20.3211 2.25254C20.3719 2.30357 20.4196 2.35779 20.4638 2.41491L21.6501 1.49687C21.5675 1.3902 21.4785 1.28891 21.3834 1.19357L20.3211 2.25254ZM21.2873 2.3348L21.3123 2.31541L20.3922 1.1307L20.3673 1.15009L21.2873 2.3348Z" fill="#2D264B" />
                                    </g>
                                </svg>


                                <svg className='editicn' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="edit_FILL0_wght400_GRAD0_opsz48 1">
                                        <path id="Vector" d="M4.875 21.125H6.06667L18.0646 9.12712L16.8729 7.93545L4.875 19.9334V21.125ZM21.5042 7.96253L18.0375 4.49587L19.175 3.35837C19.4819 3.05142 19.8611 2.89795 20.3125 2.89795C20.7639 2.89795 21.1431 3.05142 21.45 3.35837L22.6417 4.55003C22.9486 4.85698 23.1021 5.23614 23.1021 5.68753C23.1021 6.13892 22.9486 6.51809 22.6417 6.82503L21.5042 7.96253ZM20.3667 9.10003L6.71667 22.75H3.25V19.2834L16.9 5.63337L20.3667 9.10003ZM17.4688 8.53128L16.8729 7.93545L18.0646 9.12712L17.4688 8.53128Z" fill="black" />
                                    </g>
                                </svg>
                            </div>

                            {/* Business Name */}
                            <div className='box'  onClick={() => { navigate("/addsDetails") }}>
                                <svg width="20" height="22" className='docIcn' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Document Align Left 10">
                                        <g id="Vector">
                                            <path d="M6 7.75L9 7.75C9.41421 7.75 9.75 7.41421 9.75 7C9.75 6.58579 9.41421 6.25 9 6.25L6 6.25C5.58579 6.25 5.25 6.58579 5.25 7C5.25 7.41421 5.58579 7.75 6 7.75Z" fill="#243AFF" />
                                            <path d="M14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L6 10.25C5.58579 10.25 5.25 10.5858 5.25 11C5.25 11.4142 5.58579 11.75 6 11.75L14 11.75Z" fill="#243AFF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4635 0.373728C13.3214 0.249985 11.8818 0.249992 10.0452 0.25H9.95475C8.11821 0.249992 6.67861 0.249985 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62024 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62024C0.762324 3.42656 0.500006 4.37094 0.373728 5.53648C0.249985 6.67861 0.249992 8.11821 0.25 9.95475V12.0452C0.249992 13.8818 0.249985 15.3214 0.373728 16.4635C0.500006 17.6291 0.762324 18.5734 1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62024 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.67859 21.75 8.11817 21.75 9.95465 21.75H10.011C11.1711 21.75 12.1685 21.75 13.0257 21.7206C14.8991 21.6564 16.2761 21.4537 17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798C19.4537 18.2761 19.6564 16.8991 19.7206 15.0257C19.75 14.1685 19.75 13.1711 19.75 12.011V9.95473C19.75 8.11824 19.75 6.67859 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62024C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728ZM3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10V12C18.25 12.8483 18.25 13.5918 18.2392 14.2518C17.7645 14.2562 17.4151 14.271 17.1005 14.3208C14.6401 14.7105 12.7105 16.6401 12.3208 19.1005C12.271 19.4151 12.2562 19.7645 12.2518 20.2392C11.5918 20.25 10.8484 20.25 10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12V10C1.75 8.10843 1.75103 6.74999 1.865 5.69804C1.97745 4.66013 2.19259 4.00992 2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168ZM17.3352 15.8023C17.5402 15.7699 17.7776 15.7575 18.1826 15.7528C18.0888 17.1131 17.8738 17.8986 17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383C15.8986 19.8738 15.1131 20.0888 13.7528 20.1826C13.7575 19.7776 13.7699 19.5402 13.8023 19.3352C14.0904 17.5166 15.5166 16.0904 17.3352 15.8023Z" fill="#243AFF" />
                                        </g>
                                    </g>
                                </svg>
                                <div className='inBox'>
                                    <small>Business name</small>
                                    <p>{data.businessName}</p>
                                </div>

                            </div>

                            {/* Trade License */}
                            <div className='box'  onClick={() => { navigate("/addsDetails") }}>
                                <svg width="20" height="22" className='docIcn' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Document Align Left 10">
                                        <g id="Vector">
                                            <path d="M6 7.75L9 7.75C9.41421 7.75 9.75 7.41421 9.75 7C9.75 6.58579 9.41421 6.25 9 6.25L6 6.25C5.58579 6.25 5.25 6.58579 5.25 7C5.25 7.41421 5.58579 7.75 6 7.75Z" fill="#243AFF" />
                                            <path d="M14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L6 10.25C5.58579 10.25 5.25 10.5858 5.25 11C5.25 11.4142 5.58579 11.75 6 11.75L14 11.75Z" fill="#243AFF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4635 0.373728C13.3214 0.249985 11.8818 0.249992 10.0452 0.25H9.95475C8.11821 0.249992 6.67861 0.249985 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62024 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62024C0.762324 3.42656 0.500006 4.37094 0.373728 5.53648C0.249985 6.67861 0.249992 8.11821 0.25 9.95475V12.0452C0.249992 13.8818 0.249985 15.3214 0.373728 16.4635C0.500006 17.6291 0.762324 18.5734 1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62024 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.67859 21.75 8.11817 21.75 9.95465 21.75H10.011C11.1711 21.75 12.1685 21.75 13.0257 21.7206C14.8991 21.6564 16.2761 21.4537 17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798C19.4537 18.2761 19.6564 16.8991 19.7206 15.0257C19.75 14.1685 19.75 13.1711 19.75 12.011V9.95473C19.75 8.11824 19.75 6.67859 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62024C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728ZM3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10V12C18.25 12.8483 18.25 13.5918 18.2392 14.2518C17.7645 14.2562 17.4151 14.271 17.1005 14.3208C14.6401 14.7105 12.7105 16.6401 12.3208 19.1005C12.271 19.4151 12.2562 19.7645 12.2518 20.2392C11.5918 20.25 10.8484 20.25 10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12V10C1.75 8.10843 1.75103 6.74999 1.865 5.69804C1.97745 4.66013 2.19259 4.00992 2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168ZM17.3352 15.8023C17.5402 15.7699 17.7776 15.7575 18.1826 15.7528C18.0888 17.1131 17.8738 17.8986 17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383C15.8986 19.8738 15.1131 20.0888 13.7528 20.1826C13.7575 19.7776 13.7699 19.5402 13.8023 19.3352C14.0904 17.5166 15.5166 16.0904 17.3352 15.8023Z" fill="#243AFF" />
                                        </g>
                                    </g>
                                </svg>
                                <div className='inBox'>
                                    <small>#Trade license</small>
                                    <p>{data.tradeLicense}</p>
                                </div>

                            </div>




                            {/* GST no */}
                            <div className='box'  onClick={() => { navigate("/addsDetails") }}>
                                <svg width="20" height="22" className='docIcn' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Document Align Left 10">
                                        <g id="Vector">
                                            <path d="M6 7.75L9 7.75C9.41421 7.75 9.75 7.41421 9.75 7C9.75 6.58579 9.41421 6.25 9 6.25L6 6.25C5.58579 6.25 5.25 6.58579 5.25 7C5.25 7.41421 5.58579 7.75 6 7.75Z" fill="#243AFF" />
                                            <path d="M14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L6 10.25C5.58579 10.25 5.25 10.5858 5.25 11C5.25 11.4142 5.58579 11.75 6 11.75L14 11.75Z" fill="#243AFF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4635 0.373728C13.3214 0.249985 11.8818 0.249992 10.0452 0.25H9.95475C8.11821 0.249992 6.67861 0.249985 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62024 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62024C0.762324 3.42656 0.500006 4.37094 0.373728 5.53648C0.249985 6.67861 0.249992 8.11821 0.25 9.95475V12.0452C0.249992 13.8818 0.249985 15.3214 0.373728 16.4635C0.500006 17.6291 0.762324 18.5734 1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62024 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.67859 21.75 8.11817 21.75 9.95465 21.75H10.011C11.1711 21.75 12.1685 21.75 13.0257 21.7206C14.8991 21.6564 16.2761 21.4537 17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798C19.4537 18.2761 19.6564 16.8991 19.7206 15.0257C19.75 14.1685 19.75 13.1711 19.75 12.011V9.95473C19.75 8.11824 19.75 6.67859 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62024C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728ZM3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10V12C18.25 12.8483 18.25 13.5918 18.2392 14.2518C17.7645 14.2562 17.4151 14.271 17.1005 14.3208C14.6401 14.7105 12.7105 16.6401 12.3208 19.1005C12.271 19.4151 12.2562 19.7645 12.2518 20.2392C11.5918 20.25 10.8484 20.25 10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12V10C1.75 8.10843 1.75103 6.74999 1.865 5.69804C1.97745 4.66013 2.19259 4.00992 2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168ZM17.3352 15.8023C17.5402 15.7699 17.7776 15.7575 18.1826 15.7528C18.0888 17.1131 17.8738 17.8986 17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383C15.8986 19.8738 15.1131 20.0888 13.7528 20.1826C13.7575 19.7776 13.7699 19.5402 13.8023 19.3352C14.0904 17.5166 15.5166 16.0904 17.3352 15.8023Z" fill="#243AFF" />
                                        </g>
                                    </g>
                                </svg>
                                <div className='inBox'>
                                    <small>#GST no</small>
                                    <p>{data.GSTno}</p>
                                </div>

                            </div>





                            {/* Total adds */}
                            <div className='box'  onClick={() => { navigate("/addsDetails") }}>
                                <svg width="20" height="22" className='docIcn' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Document Align Left 10">
                                        <g id="Vector">
                                            <path d="M6 7.75L9 7.75C9.41421 7.75 9.75 7.41421 9.75 7C9.75 6.58579 9.41421 6.25 9 6.25L6 6.25C5.58579 6.25 5.25 6.58579 5.25 7C5.25 7.41421 5.58579 7.75 6 7.75Z" fill="#243AFF" />
                                            <path d="M14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L6 10.25C5.58579 10.25 5.25 10.5858 5.25 11C5.25 11.4142 5.58579 11.75 6 11.75L14 11.75Z" fill="#243AFF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4635 0.373728C13.3214 0.249985 11.8818 0.249992 10.0452 0.25H9.95475C8.11821 0.249992 6.67861 0.249985 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62024 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62024C0.762324 3.42656 0.500006 4.37094 0.373728 5.53648C0.249985 6.67861 0.249992 8.11821 0.25 9.95475V12.0452C0.249992 13.8818 0.249985 15.3214 0.373728 16.4635C0.500006 17.6291 0.762324 18.5734 1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62024 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.67859 21.75 8.11817 21.75 9.95465 21.75H10.011C11.1711 21.75 12.1685 21.75 13.0257 21.7206C14.8991 21.6564 16.2761 21.4537 17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798C19.4537 18.2761 19.6564 16.8991 19.7206 15.0257C19.75 14.1685 19.75 13.1711 19.75 12.011V9.95473C19.75 8.11824 19.75 6.67859 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62024C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728ZM3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10V12C18.25 12.8483 18.25 13.5918 18.2392 14.2518C17.7645 14.2562 17.4151 14.271 17.1005 14.3208C14.6401 14.7105 12.7105 16.6401 12.3208 19.1005C12.271 19.4151 12.2562 19.7645 12.2518 20.2392C11.5918 20.25 10.8484 20.25 10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12V10C1.75 8.10843 1.75103 6.74999 1.865 5.69804C1.97745 4.66013 2.19259 4.00992 2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168ZM17.3352 15.8023C17.5402 15.7699 17.7776 15.7575 18.1826 15.7528C18.0888 17.1131 17.8738 17.8986 17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383C15.8986 19.8738 15.1131 20.0888 13.7528 20.1826C13.7575 19.7776 13.7699 19.5402 13.8023 19.3352C14.0904 17.5166 15.5166 16.0904 17.3352 15.8023Z" fill="#243AFF" />
                                        </g>
                                    </g>
                                </svg>
                                <div className='inBox'>
                                    <small>Total adds</small>
                                    <p>{data.totalAdds}</p>
                                </div>

                            </div>




                            {/* Price */}
                            <div className='box'  onClick={() => { navigate("/addsDetails") }}>
                                <svg width="18" height="26" className='moneyIcn' viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2457 6.66051L16.3757 9.73047H0.081321L0.95135 6.66051H17.2457ZM9.31605 26L0.416903 15.1992L0.392045 12.7756H4.80433C5.90637 12.7756 6.83854 12.6057 7.60085 12.266C8.36316 11.9263 8.94318 11.4332 9.34091 10.7869C9.73864 10.1323 9.9375 9.33688 9.9375 8.40057C9.9375 7.00852 9.5232 5.90234 8.6946 5.08203C7.866 4.26172 6.56925 3.85156 4.80433 3.85156H0.081321L0.988636 0.545454H4.80433C6.85926 0.545454 8.55374 0.87275 9.88778 1.52734C11.2218 2.18194 12.2161 3.08925 12.8707 4.24929C13.5253 5.40933 13.8526 6.74751 13.8526 8.26385C13.8526 9.61446 13.5833 10.8366 13.0447 11.9304C12.5062 13.0241 11.6486 13.9149 10.4719 14.6026C9.29534 15.2904 7.75 15.6922 5.83594 15.8082L5.72408 15.8331L13.8526 25.7887V26H9.31605ZM17.2582 0.545454L16.3757 3.64027L3.35014 3.5657L4.2326 0.545454H17.2582Z" fill="#40E4A9" />
                                </svg>

                                <div className='inBox'>
                                    <small>Price</small>
                                    <p>{data.price}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>



                <div className='lwr'>
                    <div className='upr1'>
                        <p className='addsHeader'>Recent post</p>
                        <div className='options'>
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M2.21534 17.8686C1.88252 17.8686 1.59131 17.7346 1.3417 17.4666C1.09209 17.1985 0.967285 16.8858 0.967285 16.5285V2.68029C0.967285 2.32292 1.09209 2.01022 1.3417 1.74219C1.59131 1.47416 1.88252 1.34015 2.21534 1.34015H3.5674V0H4.91945V1.34015H11.9918V0H13.3438V1.34015H14.6959C15.0287 1.34015 15.3199 1.47416 15.5695 1.74219C15.8191 2.01022 15.9439 2.32292 15.9439 2.68029V16.5285C15.9439 16.8858 15.8191 17.1985 15.5695 17.4666C15.3199 17.7346 15.0287 17.8686 14.6959 17.8686H2.21534ZM2.21534 16.5285H14.6959V6.92409H2.21534V16.5285ZM2.21534 5.58394H14.6959V2.68029H2.21534V5.58394ZM8.4556 10.7212C8.21986 10.7212 8.02225 10.6355 7.86278 10.4643C7.7033 10.2931 7.62357 10.0809 7.62357 9.82774C7.62357 9.5746 7.7033 9.36241 7.86278 9.19117C8.02225 9.01993 8.21986 8.93431 8.4556 8.93431C8.69135 8.93431 8.88895 9.01993 9.04843 9.19117C9.2079 9.36241 9.28764 9.5746 9.28764 9.82774C9.28764 10.0809 9.2079 10.2931 9.04843 10.4643C8.88895 10.6355 8.69135 10.7212 8.4556 10.7212ZM5.12746 10.7212C4.89172 10.7212 4.69411 10.6355 4.53464 10.4643C4.37516 10.2931 4.29543 10.0809 4.29543 9.82774C4.29543 9.5746 4.37516 9.36241 4.53464 9.19117C4.69411 9.01993 4.89172 8.93431 5.12746 8.93431C5.3632 8.93431 5.56081 9.01993 5.72029 9.19117C5.87976 9.36241 5.9595 9.5746 5.9595 9.82774C5.9595 10.0809 5.87976 10.2931 5.72029 10.4643C5.56081 10.6355 5.3632 10.7212 5.12746 10.7212ZM11.7837 10.7212C11.548 10.7212 11.3504 10.6355 11.1909 10.4643C11.0314 10.2931 10.9517 10.0809 10.9517 9.82774C10.9517 9.5746 11.0314 9.36241 11.1909 9.19117C11.3504 9.01993 11.548 8.93431 11.7837 8.93431C12.0195 8.93431 12.2171 9.01993 12.3766 9.19117C12.536 9.36241 12.6158 9.5746 12.6158 9.82774C12.6158 10.0809 12.536 10.2931 12.3766 10.4643C12.2171 10.6355 12.0195 10.7212 11.7837 10.7212ZM8.4556 14.2949C8.21986 14.2949 8.02225 14.2093 7.86278 14.038C7.7033 13.8668 7.62357 13.6546 7.62357 13.4015C7.62357 13.1483 7.7033 12.9361 7.86278 12.7649C8.02225 12.5936 8.21986 12.508 8.4556 12.508C8.69135 12.508 8.88895 12.5936 9.04843 12.7649C9.2079 12.9361 9.28764 13.1483 9.28764 13.4015C9.28764 13.6546 9.2079 13.8668 9.04843 14.038C8.88895 14.2093 8.69135 14.2949 8.4556 14.2949ZM5.12746 14.2949C4.89172 14.2949 4.69411 14.2093 4.53464 14.038C4.37516 13.8668 4.29543 13.6546 4.29543 13.4015C4.29543 13.1483 4.37516 12.9361 4.53464 12.7649C4.69411 12.5936 4.89172 12.508 5.12746 12.508C5.3632 12.508 5.56081 12.5936 5.72029 12.7649C5.87976 12.9361 5.9595 13.1483 5.9595 13.4015C5.9595 13.6546 5.87976 13.8668 5.72029 14.038C5.56081 14.2093 5.3632 14.2949 5.12746 14.2949ZM11.7837 14.2949C11.548 14.2949 11.3504 14.2093 11.1909 14.038C11.0314 13.8668 10.9517 13.6546 10.9517 13.4015C10.9517 13.1483 11.0314 12.9361 11.1909 12.7649C11.3504 12.5936 11.548 12.508 11.7837 12.508C12.0195 12.508 12.2171 12.5936 12.3766 12.7649C12.536 12.9361 12.6158 13.1483 12.6158 13.4015C12.6158 13.6546 12.536 13.8668 12.3766 14.038C12.2171 14.2093 12.0195 14.2949 11.7837 14.2949Z" fill="white" />
                            </svg>

                            <select id="Today" className='optn'>
                                <option value="today">Today</option>
                                <option value="last week">Last Week</option>
                                <option value="this month">This month</option>
                                <option value="this year">This year</option>
                            </select>
                        </div>
                    </div>
                    <div className='lwrlwr'>
                        <div className='card'>
                            {Data2.map((data, index) => (
                                <div key={index} className='cardadd'>
                                    <div className='image'>
                                        <img src={data.img} alt='addImg' />
                                    </div>
                                    <div className='details'>
                                        <p>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Document Align Left 10">
                                                    <g id="Vector">
                                                        <path d="M6 7.75L9 7.75C9.41421 7.75 9.75 7.41421 9.75 7C9.75 6.58579 9.41421 6.25 9 6.25L6 6.25C5.58579 6.25 5.25 6.58579 5.25 7C5.25 7.41421 5.58579 7.75 6 7.75Z" fill="#243AFF" />
                                                        <path d="M14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L6 10.25C5.58579 10.25 5.25 10.5858 5.25 11C5.25 11.4142 5.58579 11.75 6 11.75L14 11.75Z" fill="#243AFF" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4635 0.373728C13.3214 0.249985 11.8818 0.249992 10.0452 0.25H9.95475C8.11821 0.249992 6.67861 0.249985 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62024 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62024C0.762324 3.42656 0.500006 4.37094 0.373728 5.53648C0.249985 6.67861 0.249992 8.11821 0.25 9.95475V12.0452C0.249992 13.8818 0.249985 15.3214 0.373728 16.4635C0.500006 17.6291 0.762324 18.5734 1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62024 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.67859 21.75 8.11817 21.75 9.95465 21.75H10.011C11.1711 21.75 12.1685 21.75 13.0257 21.7206C14.8991 21.6564 16.2761 21.4537 17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798C19.4537 18.2761 19.6564 16.8991 19.7206 15.0257C19.75 14.1685 19.75 13.1711 19.75 12.011V9.95473C19.75 8.11824 19.75 6.67859 19.6263 5.53648C19.5 4.37094 19.2377 3.42656 18.6518 2.62024C18.2972 2.13209 17.8679 1.70281 17.3798 1.34815C16.5734 0.762324 15.6291 0.500006 14.4635 0.373728ZM3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75C11.8916 1.75 13.25 1.75103 14.302 1.865C15.3399 1.97745 15.9901 2.19259 16.4981 2.56168C16.8589 2.82382 17.1762 3.14111 17.4383 3.50191C17.8074 4.00992 18.0225 4.66013 18.135 5.69804C18.249 6.74999 18.25 8.10843 18.25 10V12C18.25 12.8483 18.25 13.5918 18.2392 14.2518C17.7645 14.2562 17.4151 14.271 17.1005 14.3208C14.6401 14.7105 12.7105 16.6401 12.3208 19.1005C12.271 19.4151 12.2562 19.7645 12.2518 20.2392C11.5918 20.25 10.8484 20.25 10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12V10C1.75 8.10843 1.75103 6.74999 1.865 5.69804C1.97745 4.66013 2.19259 4.00992 2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168ZM17.3352 15.8023C17.5402 15.7699 17.7776 15.7575 18.1826 15.7528C18.0888 17.1131 17.8738 17.8986 17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383C15.8986 19.8738 15.1131 20.0888 13.7528 20.1826C13.7575 19.7776 13.7699 19.5402 13.8023 19.3352C14.0904 17.5166 15.5166 16.0904 17.3352 15.8023Z" fill="#243AFF" />
                                                    </g>
                                                </g>
                                            </svg>
                                            ward no { }
                                            {data.wardNo}
                                        </p>
                                        <p>
                                            <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Location">
                                                    <path id="Vector" d="M11.7808 19.7005L11.1906 19.2377L11.7808 19.7005ZM6.21921 19.7005L5.62903 20.1633L6.21921 19.7005ZM9 22.0055V21.2555V22.0055ZM16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087H16.25ZM6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087H0.25C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L6.80938 19.2377ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75V0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087H1.75ZM9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087H17.75C17.75 4.49277 13.8833 0.25 9 0.25V1.75ZM11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555V22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.2886 21.5476 11.7849 20.9107 12.371 20.1633L11.1906 19.2377ZM5.62903 20.1633C6.21511 20.9107 6.71136 21.5476 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555V21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377L5.62903 20.1633ZM5.25 10C5.25 12.0711 6.92893 13.75 9 13.75V12.25C7.75736 12.25 6.75 11.2426 6.75 10H5.25ZM9 13.75C11.0711 13.75 12.75 12.0711 12.75 10H11.25C11.25 11.2426 10.2426 12.25 9 12.25V13.75ZM12.75 10C12.75 7.92893 11.0711 6.25 9 6.25V7.75C10.2426 7.75 11.25 8.75736 11.25 10H12.75ZM9 6.25C6.92893 6.25 5.25 7.92893 5.25 10H6.75C6.75 8.75736 7.75736 7.75 9 7.75V6.25Z" fill="#243AFF" />
                                                </g>
                                            </svg>
                                            {data.address}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Adds;