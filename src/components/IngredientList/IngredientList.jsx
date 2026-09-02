import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <Ingredient
          key={`${ingredient.name}-${index}`}
          name={ingredient.name}
          color={ingredient.color}
          onAdd={() => addToBurger(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;