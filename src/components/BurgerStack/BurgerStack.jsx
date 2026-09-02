import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  if (stack.length === 0) {
    return <p>No Ingredients</p>;
  }

  return (
    <ul>
      {stack.map((ingredient, index) => (
        <Ingredient
          key={`${ingredient.name}-${index}`}
          name={ingredient.name}
          color={ingredient.color}
          onRemove={() => removeFromBurger(index)}
        />
      ))}
    </ul>
  );
};

export default BurgerStack;