import React from 'react'
import "./sidebar.css"
import { Link, Outlet } from 'react-router-dom'
import CreateJob from './element/CreateJob'
import { useState } from 'react'

const Sidebar = () => {
  return (
        <div>
            <div className="wrapper">
                {/* Sidebar  */}
                <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Bootstrap Sidebar</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <p>Dummy Heading</p>
                            <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                                <Link to="createjob">Create job</Link>
                            </li>
                            <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                <a href="#">Page 3</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                
                </nav>
                {/* Page Content  */}
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left" />
                                <span>Toggle Sidebar</span>
                            </button>
                            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-align-justify" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                    
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Sidebar