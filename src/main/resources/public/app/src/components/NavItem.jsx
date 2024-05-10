import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import "../styles/navitem.css"



export default function NavItem({itemName}) {

    const navigate = useNavigate();

    function PushHandler(){
        navigate(`/${itemName}`);
    }

  return (
    <li>
        <a href="#0" onClick={PushHandler}>
            <svg>
                <use href="#"></use>
            </svg>
            <span>{itemName}</span>
        </a>
    </li>
  )
}
