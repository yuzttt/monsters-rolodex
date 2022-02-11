import React from "react";

import './search-box.css';
//functional components=> props + return

export const SearchBox=({placeholder,handleChange})=>(
    <input
    className="search"
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    />
);