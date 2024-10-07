import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Your Digital Pantry! 🥘</h1>
            <p>Manage your ingredients, discover recipes, and compete with friends.</p>
            <nav>
                <ul>
                    <li><Link to="/pantry">My Pantry</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/games">Games</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;
