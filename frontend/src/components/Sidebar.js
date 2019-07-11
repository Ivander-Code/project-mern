import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <div className='navbar' id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
                <div className='navbar-brand text-white'>
                    <h2>Users Menu</h2>
                </div>
                <div className='dropdown-divider'></div>
                <div className='nav-item'>
                    <Link to = '/all_records'> <span className = 'text-light nav-link'> Show records </span></Link >
                </div>
                <div className='nav-item'>
                    <Link to = '/new_record' > <span className = 'text-light nav-link'> Create new rerecord </span></Link >
                </div>
                <div className='nav-item'>
                    <Link to = '/update_record'> <span className = 'text-light nav-link'> Update records </span></Link >
                </div>
            </div>
        </div>
    );
}
export default Sidebar;