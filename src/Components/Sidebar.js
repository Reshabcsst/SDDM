import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Styles/Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='main'>
            <div className="li">
                <li><button onClick={() => navigate("/addward")}>Ward List</button></li>
                <li><button onClick={() => navigate("/assign")}>Assign Ward</button></li>
                <li><button onClick={() => navigate("/registerAgancy")}>Register Agancy</button></li>
                <li><button onClick={() => navigate("/recentPosts")}>Recent Posts</button></li>
            </div>
        </div>
    )
}

export default Sidebar;
