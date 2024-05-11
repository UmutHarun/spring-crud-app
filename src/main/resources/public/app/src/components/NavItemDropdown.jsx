import React , { useState , useEffect } from 'react'
import NavItem from './NavItem';
import { useLocation } from 'react-router-dom';

export default function NavItemDropdown({itemName,dropdownList}) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        dropdownList.forEach(element => {
            if (path === `/${element.name}`) {
                setIsOpen(true);
            }
        });
    }, [location.pathname, dropdownList]);

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
                {dropdownList.map((element, index) => {
                    return <NavItem key={index} itemName={element.name} />;
                })}
            </ul>
            )}
        </li>
    )
}
