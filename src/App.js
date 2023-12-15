import React, { useState } from "react";
import SearchForm from "./SearchForm";
import UserList from "./UserList";
import './App.css';

function App() {
    
    const [searchResult, setSearchResult] = useState([]);

    async function search(query) {
        console.log("Searching username..." + query);

        try {
            const response = await fetch(`https://api.github.com/users/${query}`);
            if (!response.ok) {
                throw new Error(`GitHub API failed with status ${response.status}`);
            }

            const data = await response.json();
            setSearchResult([data]);
        } catch (error) {
            console.log("Error fatching user:", error.message);
            setSearchResult([]);
        }

    };


    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Whisper&display=swap" rel="stylesheet"></link>

            <div className="app">
                <SearchForm onSearch={search} />
                <UserList searchResult={searchResult} setSearchResult={setSearchResult} />

            </div>
        </>
    )
};

export default App;