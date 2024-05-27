import React from 'react';
import './Navbar.css';
import { AiOutlineRight } from "react-icons/ai";

const ButtonLoad = ({ text, onClick, style }) => {
    return (
        <div>
            <button onClick={onClick} style={style}>{text}</button>
        </div>
    );
};

export default ButtonLoad;
