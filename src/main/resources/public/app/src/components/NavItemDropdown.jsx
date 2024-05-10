import React , { useState } from 'react'
import NavItem from './NavItem';

export default function NavItemDropdown({itemName,dropdownList}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="dropdown">
            <a href="#0" className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                <svg>
                    <use href="#"></use>
                </svg>
                <span>{itemName}</span>
            </a>
            {isOpen && (
                <ul className="dropdown-menu">
                {dropdownList.map((element, index) => (
                    <NavItem key={index} itemName={element.name} />
                ))}
            </ul>
            )}
        </li>
    )
}
