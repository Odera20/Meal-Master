import React, { useState } from 'react';
import './RecipePage.css'; // CSS animations for 3D flip

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card group">
            <div className="recipe-card-inner">
                <div className="recipe-card-front p-4">
                    <h2>{recipe.name}</h2>
                    <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                </div>
                <div className="recipe-card-back p-4">
                    <h2>Instructions</h2>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

const RecipePage = ({ pantryItems }) => {
    const [recipes, setRecipes] = useState([
        { name: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'tomato', 'minced meat'], instructions: 'Boil pasta, prepare sauce, combine!' },
        { name: 'Tomato Salad', ingredients: ['tomato', 'olive oil', 'basil'], instructions: 'Chop tomatoes, drizzle with olive oil, and top with basil.' },
    ]);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Recipe Suggestions 👨‍🍳</h1>
            <div className="grid grid-cols-3 gap-6">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.name} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipePage;
