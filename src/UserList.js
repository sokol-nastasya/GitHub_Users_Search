import React from "react";
import UserCard from "./UserCard";

function UserList({searchResult = [], setSearchResult }) {

    const handleClear = (username) => {
        setSearchResult([]);
        setSearchResult(prevResult => prevResult.filter(user => user.name !== username));
    };

    return (
        <div>
            {searchResult.map(user => (
                <UserCard key={user.name} user={user} onClearAll={handleClear}/>
            ))}
        </div>
    )
};

export default UserList;