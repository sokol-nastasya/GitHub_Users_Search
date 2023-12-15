import React, { useCallback, useState } from "react";
import './SearchForm.css'

function SearchForm(props) {

    const [username, setUsername] = useState("");

    
    const handleName = useCallback((e) => {
        setUsername(e.target.value)
    }, []);


   const handleSearch = useCallback(() => {
    props.onSearch(username);
   }, [props.onSearch, username]);


   const handleClear = () => {
    setUsername("");
   };
    
    return (
        <div className="search_form">
            <label htmlFor="search" className="label">Search User in GitHub:</label><br></br>
            <input id="search" type="text" className="input_search" placeholder="Enter Username" value={username} onChange={handleName} />
            <button type="submit" className="btn_submit" onClick={handleSearch}>Search</button>
            <button className="btn_clear" onClick={handleClear}>Clear</button>
        </div>
    )
};

export default SearchForm;