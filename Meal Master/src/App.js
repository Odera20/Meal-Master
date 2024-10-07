import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyPantryPage from './pages/MyPantryPage';
import RecipePage from './pages/RecipePage';
import CommunityPage from './pages/CommunityPage';
import GamesPage from './pages/GamesPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/pantry" component={MyPantryPage} />
                <Route path="/recipes" component={RecipePage} />
                <Route path="/community" component={CommunityPage} />
                <Route path="/games" component={GamesPage} />
            </Switch>
        </Router>
    );
}

export default App;
