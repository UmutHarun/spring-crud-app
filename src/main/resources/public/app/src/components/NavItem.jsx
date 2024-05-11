import React, { useState , useEffect} from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import '../styles/Header.css';
import "../styles/navitem.css"



export default function NavItem({itemName}) {
    // let selectedStyle;
    const navigate = useNavigate();
    const location = useLocation();
    const [isSelected , setIsSelected] = useState(false);

    function PushHandler(){
        navigate(`/${itemName}`);

        setIsSelected(true);
    }

    // useEffect(() => {
    //     return () => {
    //         setIsSelected(false);
    //     };
    // }, []);

    useEffect(() => {
        setIsSelected(location.pathname === `/${itemName}`);
    }, [location.pathname, itemName]);

    return (
        <li className={isSelected ? "selected" : undefined}>
            <a href="#0" onClick={PushHandler}>
                <svg>
                    <use href="#"></use>
                </svg>
                <span>{itemName}</span>
            </a>
        </li>
    )
}
