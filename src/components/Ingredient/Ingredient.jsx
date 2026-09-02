const Ingredient = ({ name, color, onAdd, onRemove }) => {
  let button;

  if (onAdd) {
    button = <button onClick={onAdd}>+</button>;
  } else if (onRemove) {
    button = <button onClick={onRemove}>X</button>;
  }

  return (
    <li style={{ backgroundColor: color }}>
      {name}
      {button}
    </li>
  );
};

export default Ingredient;
