import React from 'react';

const RecipeInstructionsPage = ({ recipe }) => {
    return (
        <div>
            <h1>{recipe.name} - Instructions 📋</h1>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeInstructionsPage;
