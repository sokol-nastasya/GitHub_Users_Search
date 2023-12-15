import React from "react";
import './UserCard.css';
import clear_ic from './clear_ic.png';

function UserCard({user, onClearAll}) {

    return (
        <div className="user-card">
            <h3>User Details:</h3>
            <div className="card_block">
                <div className="image_block">
                    <img src={user.avatar_url} className="avatar"></img>
                </div>
                <div className="info_block">
                    <p>Name: <span className="highlight">{user.name}</span></p>
                    <p>Username: <span className="highlight">{user.login}</span></p>
                    <p>Projects: <span className="highlight">{user.public_repos}</span></p>
                    <p>Followers: <span className="highlight">{user.followers}</span></p>
                    <p>Following: <span className="highlight">{user.following}</span></p>
                </div>
            </div>
            <div className="open_block">
                <a href={`https://github.com/${user.login}`} target="_blank">
                    <button className="btn_navigate">Go to GitHub</button>
                </a>
            </div>
            <div className="clearAll">
                <button onClick={onClearAll}><img src={clear_ic}></img></button>
            </div>
        </div>
    )
};

export default UserCard;