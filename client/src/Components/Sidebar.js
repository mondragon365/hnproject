import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item active">
                        <Link to='/users'>
                            <p className="nav-link " ><span data-feather="shopping-cart"></span>Users</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}