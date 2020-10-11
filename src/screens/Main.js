import React from 'react';
import RecipeList from './RecipeList';

const Main = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Recipe Payment Gateway</span>
      </nav>
      <RecipeList />
    </div>
  );
};

export default Main;
