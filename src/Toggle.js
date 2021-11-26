import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';


const Toggle = ({ toggle, setToggle }) => {


    return (
        <div className='header'>
            <h1 className={toggle ? 'title' : 'title white-title'}>My Notes</h1>
            <button className='toggle-btn' onClick={() => setToggle(!toggle)}>
                {toggle ? <FaToggleOff className='toggle-on' /> : <FaToggleOn className='toggle-off' />}
            </button>

        </div>
    );
}

export default Toggle;