import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Image from 'react-bootstrap/Image';

const Navbar = () => {
  // Nav-Link Background active
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };


  return (
    <>
      <nav id='navbar' className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

        {/* Navbar Brand */}
        <div id="logo">
          <a className="navbar-brand" href="./index.html">
          </a>
        </div>
        {/* Navbar Button */}
        <button className="btn btn-primary navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span
            className="navbar-toggler-icon"></span></button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">

            <button type="button" id className="btn-close text-reset my-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" id="sidebarCollapse">
            <ul className="navbar-nav">

              <li className={({isActive}) => {
                return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
              }}>
                <NavLink to='/' rel='noopener noreferrer' className={({ isActive }) => {
                  return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
                 }  }  >Home</NavLink>
              </li>


              <li className={({isActive}) => {
                return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
              }}>
                <NavLink to='Promos' rel='noopener noreferrer' className={({ isActive }) => {
                  return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
                 } }  >Referral</NavLink>
              </li>



              <li className={({isActive}) => {
                return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
              }}>
                <NavLink to='' rel='noopener noreferrer' className={({ isActive }) => {
                  return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
                 } }  >About</NavLink>
              </li>


              <li className={({isActive}) => {
                return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
              }}>
                <NavLink to='' rel='noopener noreferrer' className={({ isActive }) => {
                  return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
                 } }  >Contact</NavLink>
              </li>

            </ul>
          </div>
        </div>


        {/* Navbar links */}
        <div className="collapse navbar navbar-collapse justify-content-end mx-1 px-2" >
          <ul className="navbar-nav">

            <li className={({isActive}) => {
              return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
            }}>
              <NavLink to='/' className={({ isActive }) => {
                return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
               }}>Home</NavLink>
            </li>

            <li className={({isActive}) => {
              return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
            }}>
              <NavLink to='Promos' className={({ isActive }) => {
                return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
               } }  >Referrels</NavLink>
            </li>


            <li className={({isActive}) => {
              return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
            }}>
              <NavLink to='' className={({ isActive }) => {
                return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
               } }  >About</NavLink>
            </li>

            <li className={({isActive}) => {
              return 'nav-item nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active')
            }}>
              <NavLink to='' className={({ isActive }) => {
                return 'nav-link' + (isActive ? 'nav-item nav-link' : 'nav-item nav-link active' )
               } }  >Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;