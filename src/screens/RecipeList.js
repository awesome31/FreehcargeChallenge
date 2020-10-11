import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import RecipeCard from '../components/RecipeCard';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const onPaymentPress = (price) => {
    setModalShow(true);
    setSelectedPrice(price);
  };

  useEffect(() => {
    setLoading(true);
    fetch('http://starlord.hackerearth.com/recipe')
      .then((recipes) => recipes.json())
      .then((recipes) => {
        setRecipes(recipes);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="spin">
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedPrice={selectedPrice}
      />
      <div className="main pt-4 pb-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            {...recipe}
            onPaymentPress={onPaymentPress}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
